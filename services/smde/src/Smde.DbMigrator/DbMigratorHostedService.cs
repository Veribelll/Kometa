using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Smde.Data;
using Volo.Abp;

namespace Smde;

public class DbMigratorHostedService : IHostedService
{
    protected readonly IHostApplicationLifetime HostApplicationLifetime;
    protected readonly IConfiguration Configuration;

    public DbMigratorHostedService(IHostApplicationLifetime hostApplicationLifetime, IConfiguration configuration)
    {
        HostApplicationLifetime = hostApplicationLifetime;
        Configuration = configuration;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var application = await AbpApplicationFactory.CreateAsync<SmdeDbMigratorModule>(options =>
        {
            options.Services.ReplaceConfiguration(Configuration);
            options.UseAutofac();
            options.Services.AddLogging(c => c.AddSerilog());
        });
            
        await application.InitializeAsync();

        await application
            .ServiceProvider
            .GetRequiredService<SmdeDbMigrationService>()
            .MigrateAsync();

        await application.ShutdownAsync();

        HostApplicationLifetime.StopApplication();
    }

    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}