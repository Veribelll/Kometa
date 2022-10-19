using Kometa.MultiContractor;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace Kometa.AspNetCore.Mvc;

[DependsOn(typeof(AbpAspNetCoreMvcModule))]
[DependsOn(typeof(KometaMultiContractorModule))]
[DependsOn(typeof(KometaAspNetCoreMvcContractsModule))]
public class KometaAspNetCoreMvcModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<MvcOptions>(opt =>
        {
            opt.Conventions.Add(new AbpApplicationConfigurationControllerConvention());
        });
    }
}