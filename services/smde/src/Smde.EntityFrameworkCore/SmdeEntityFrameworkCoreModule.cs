using Kometa.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Smde.Emex.Orders;
using Smde.EntityFrameworkCore.Repositories;
using Smde.LastMiles.AccessKeys;
using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace Smde.EntityFrameworkCore;

[DependsOn(typeof(AbpIdentityEntityFrameworkCoreModule))]
[DependsOn(typeof(AbpIdentityServerEntityFrameworkCoreModule))]
[DependsOn(typeof(AbpPermissionManagementEntityFrameworkCoreModule))]
[DependsOn(typeof(AbpSettingManagementEntityFrameworkCoreModule))]
[DependsOn(typeof(AbpBackgroundJobsEntityFrameworkCoreModule))]
[DependsOn(typeof(AbpAuditLoggingEntityFrameworkCoreModule))]
[DependsOn(typeof(AbpTenantManagementEntityFrameworkCoreModule))]
[DependsOn(typeof(AbpFeatureManagementEntityFrameworkCoreModule))]
[DependsOn(typeof(KometaEntityFrameworkCoreModule))]
[DependsOn(typeof(SmdeDomainModule))]
public class SmdeEntityFrameworkCoreModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        SmdeEfCoreEntityExtensionMappings.Configure();
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<SmdeDbContext>(options =>
        {
            options
                .AddDefaultRepositories()
                .AddRepository<AccessKey, AccessKeyRepository>()
                .AddRepository<EmexProduct, EmexProductRepository>()
                .AddRepository<IdentityUser, SmdeIdentityUserRepository>()
                .AddRepository<Cell, CellRepository>()
                .AddRepository<ControllerBase, ControllerRepository>()
                .AddRepository<Lock, LockRepository>();
        });

        Configure<AbpDbContextOptions>(options => { options.UseNpgsql(); });
    }
}