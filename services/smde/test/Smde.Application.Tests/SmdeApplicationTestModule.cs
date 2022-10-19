using Volo.Abp.Modularity;

namespace Smde;

[DependsOn(typeof(SmdeApplicationModule))]
[DependsOn(typeof(SmdeDomainTestModule))]
public class SmdeApplicationTestModule : AbpModule
{

}