using Kometa.MultiContractor.Current;
using Volo.Abp.AspNetCore;
using Volo.Abp.Modularity;

namespace Kometa.MultiContractor;

[DependsOn(typeof(AbpAspNetCoreModule))]
[DependsOn(typeof(KometaMultiContractorModule))]
public class KometaAspNetCoreMultiContractorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<ContractorResolveOptions>(options =>
        {
            options.Resolvers.Add(new HeaderContractorResolveContributor());
            options.Resolvers.Add(new CookieContractorResolveContributor());
        });
    }
}