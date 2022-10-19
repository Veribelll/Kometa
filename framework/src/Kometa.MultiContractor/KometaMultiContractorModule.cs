using Kometa.Json;
using Kometa.MultiContractor.Available;
using Kometa.MultiContractor.Current;
using Kometa.Security;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Data;
using Volo.Abp.EventBus.Abstractions;
using Volo.Abp.Modularity;

namespace Kometa.MultiContractor;

[DependsOn(typeof(AbpDataModule))]
[DependsOn(typeof(AbpEventBusAbstractionsModule))]
[DependsOn(typeof(KometaJsonModule))]
[DependsOn(typeof(KometaSecurityModule))]
public class KometaMultiContractorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AvailableContractorsResolveOptions>(options =>
        {
            options.Resolvers.Add(new CurrentUserAvailableContractorsResolveContributor());
        });

        Configure<AbpDataFilterOptions>(options =>
        {
            options.DefaultStates[typeof(IMultiContractor)] = new DataFilterState(true);
        });

        context.Services.AddSingleton<ICurrentContractorAccessor>(AsyncLocalCurrentContractorAccessor.Instance);
        context.Services.AddSingleton<IAvailableContractorsAccessor>(AsyncLocalAvailableContractorsAccessor.Instance);
    }
}