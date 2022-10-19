using Smde.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Smde;

[DependsOn(typeof(SmdeTestBaseModule))]
[DependsOn(typeof(SmdeEntityFrameworkCoreTestModule))]
[DependsOn(typeof(SmdeHttpApiGraphqlModule))]
public class SmdeGraphqlTestModule: AbpModule
{
        
}