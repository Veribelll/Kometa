using Smde.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Smde;

[DependsOn(typeof(AbpAutofacModule))]
[DependsOn(typeof(SmdeEntityFrameworkCoreModule))]
[DependsOn(typeof(SmdeApplicationContractsModule))]
public class SmdeDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        
        Configure<AbpBackgroundJobOptions>(options =>
        {
            options.IsJobExecutionEnabled = false;
        });
    }
}