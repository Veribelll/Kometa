using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore;

public class SmdeDbContextFactory : IDesignTimeDbContextFactory<SmdeDbContext>
{
    public SmdeDbContext CreateDbContext(string[] args)
    {
        SmdeEfCoreEntityExtensionMappings.Configure();
            
        var builder = new DbContextOptionsBuilder<SmdeDbContext>()
            .UseNpgsql(
                GetConnectionStringFromConfiguration(),
                b => { b.MigrationsHistoryTable("__Smde_Migrations"); });

        return new SmdeDbContext(builder.Options);
    }

    private static string GetConnectionStringFromConfiguration()
    {
        return BuildConfiguration()
            .GetConnectionString(ConnectionStringName);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(
                Path.Combine(
                    Directory.GetCurrentDirectory(),
                    $"..{Path.DirectorySeparatorChar}Smde.HttpApi.Host"
                )
            )
            .AddJsonFile("appsettings.json", false);

        return builder.Build();
    }
}