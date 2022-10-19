using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.Testing;

namespace Smde;

public abstract class SmdeTestBase<TStartupModule> : AbpIntegratedTest<TStartupModule> 
    where TStartupModule : IAbpModule
{
    protected override void SetAbpApplicationCreationOptions(AbpApplicationCreationOptions options)
    {
        options.UseAutofac();
    }
}