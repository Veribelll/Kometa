using System.Diagnostics;
using System.Runtime.InteropServices;
using Kometa.MultiContractor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Smde.Contractors;
using Smde.Identity;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.TenantManagement;

namespace Smde.Data;

public class SmdeDbMigrationService : ITransientDependency
{
    public ILogger<SmdeDbMigrationService> Logger { get; set; }

    protected readonly IDataSeeder DataSeeder;
    protected readonly IEnumerable<ISmdeDbSchemaMigrator> DbSchemaMigrators;
    protected readonly ITenantRepository TenantRepository;
    protected readonly IContractorStore ContractorStore;
    protected readonly IContractorDataSeeder ContractorDataSeeder;
    protected readonly ICurrentTenant CurrentTenant;
    protected readonly IConfiguration Configuration;

    public SmdeDbMigrationService(
        IDataSeeder dataSeeder,
        IEnumerable<ISmdeDbSchemaMigrator> dbSchemaMigrators,
        ITenantRepository tenantRepository,
        IContractorStore contractorStore,
        IContractorDataSeeder contractorDataSeeder,
        ICurrentTenant currentTenant,
        IConfiguration configuration)
    {
        DataSeeder = dataSeeder;
        DbSchemaMigrators = dbSchemaMigrators;
        TenantRepository = tenantRepository;
        ContractorStore = contractorStore;
        ContractorDataSeeder = contractorDataSeeder;
        CurrentTenant = currentTenant;
        Configuration = configuration;

        Logger = NullLogger<SmdeDbMigrationService>.Instance;
    }

    public async Task MigrateAsync()
    {
        var initialMigrationAdded = AddInitialMigrationIfNotExist();

        if (initialMigrationAdded)
        {
            return;
        }

        Logger.LogInformation("Started database migrations...");

        await MigrateDatabaseSchemaAsync();
        await SeedDataAsync();

        Logger.LogInformation($"Successfully completed host database migrations.");

        var tenants = await TenantRepository.GetListAsync(includeDetails: true);

        var migratedDatabaseSchemas = new HashSet<string>();
        foreach (var tenant in tenants)
        {
            using (CurrentTenant.Change(tenant.Id))
            {
                if (tenant.ConnectionStrings.Any())
                {
                    var tenantConnectionStrings = tenant.ConnectionStrings
                        .Select(x => x.Value)
                        .ToList();

                    if (!migratedDatabaseSchemas.IsSupersetOf(tenantConnectionStrings))
                    {
                        await MigrateDatabaseSchemaAsync(tenant);

                        migratedDatabaseSchemas.AddIfNotContains(tenantConnectionStrings);
                    }
                }

                await SeedDataAsync(tenant);
            }

            Logger.LogInformation("Successfully completed {Tenant} tenant database migrations.", tenant.Name);
        }

        Logger.LogInformation("Successfully completed all database migrations.");
        Logger.LogInformation("You can safely end this process...");
    }

    private async Task MigrateDatabaseSchemaAsync(Tenant? tenant = null)
    {
        Logger.LogInformation("Migrating schema for {Tenant} database...",
            tenant == null ? "host" : tenant.Name + " tenant");

        foreach (var migrator in DbSchemaMigrators)
        {
            await migrator.MigrateAsync();
        }
    }

    private async Task SeedDataAsync(Tenant? tenant = null)
    {
        Logger.LogInformation("Executing {Tenant} database seed...",
            tenant == null ? "host" : tenant.Name + " tenant");

        await ContractorDataSeeder.SeedAsync(tenant?.Id);

        var contractor = await ContractorStore.GetHostAsync(tenant?.Id);

        await DataSeeder.SeedAsync(new DataSeedContext(tenant?.Id)
            .WithProperty(SmdeIdentityDataSeedContributor.AdminEmailPropertyName, Configuration["Admin:Email"])
            .WithProperty(SmdeIdentityDataSeedContributor.AdminPasswordPropertyName, Configuration["Admin:Password"])
            .WithProperty(SmdeIdentityDataSeedContributor.ContractorIdPropertyName, contractor.Id)
        );
    }

    private bool AddInitialMigrationIfNotExist()
    {
        try
        {
            if (!DbMigrationsProjectExists())
            {
                return false;
            }
        }
        catch (Exception)
        {
            return false;
        }

        try
        {
            if (!MigrationsFolderExists())
            {
                AddInitialMigration();
                return true;
            }

            return false;
        }
        catch (Exception e)
        {
            Logger.LogWarning("Couldn't determinate if any migrations exist : {Message}", e.Message);
            return false;
        }
    }

    private bool DbMigrationsProjectExists()
    {
        var dbMigrationsProjectFolder = GetEntityFrameworkCoreProjectFolderPath();

        return dbMigrationsProjectFolder != null;
    }

    private bool MigrationsFolderExists()
    {
        var dbMigrationsProjectFolder = GetEntityFrameworkCoreProjectFolderPath();

        return dbMigrationsProjectFolder is not null &&
               Directory.Exists(Path.Combine(dbMigrationsProjectFolder, "Migrations"));
    }

    private void AddInitialMigration()
    {
        Logger.LogInformation("Creating initial migration...");

        string argumentPrefix;
        string fileName;

        if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX) || RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
        {
            argumentPrefix = "-c";
            fileName = "/bin/bash";
        }
        else
        {
            argumentPrefix = "/C";
            fileName = "cmd.exe";
        }

        var procStartInfo = new ProcessStartInfo(fileName,
            $"{argumentPrefix} \"abp create-migration-and-run-migrator \"{GetEntityFrameworkCoreProjectFolderPath()}\"\""
        );

        try
        {
            Process.Start(procStartInfo);
        }
        catch (Exception)
        {
            throw new Exception("Couldn't run ABP CLI...");
        }
    }

    private static string? GetEntityFrameworkCoreProjectFolderPath()
    {
        var slnDirectoryPath = GetSolutionDirectoryPath();

        if (slnDirectoryPath == null)
        {
            throw new Exception("Solution folder not found!");
        }

        var srcDirectoryPath = Path.Combine(slnDirectoryPath, "src");

        return Directory.GetDirectories(srcDirectoryPath)
            .FirstOrDefault(d => d.EndsWith(".EntityFrameworkCore"));
    }

    private static string? GetSolutionDirectoryPath()
    {
        var currentDirectory = new DirectoryInfo(Directory.GetCurrentDirectory());

        while (Directory.GetParent(currentDirectory.FullName) != null)
        {
            currentDirectory = Directory.GetParent(currentDirectory.FullName) ?? throw new NullReferenceException();

            if (Directory.GetFiles(currentDirectory.FullName).FirstOrDefault(f => f.EndsWith(".sln")) != null)
            {
                return currentDirectory.FullName;
            }
        }

        return null;
    }
}