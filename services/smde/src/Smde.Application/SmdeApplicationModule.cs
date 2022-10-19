using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account;
using Volo.Abp.AutoMapper;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;

namespace Smde;

[DependsOn(typeof(AbpAccountApplicationModule))]
[DependsOn(typeof(AbpIdentityApplicationModule))]
[DependsOn(typeof(AbpPermissionManagementApplicationModule))]
[DependsOn(typeof(SmdeDomainModule))]
[DependsOn(typeof(SmdeApplicationContractsModule))]
public class SmdeApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<SmdeApplicationModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddProfile<SmdeApplicationAutoMapperProfile>(true);
        });
    }
}