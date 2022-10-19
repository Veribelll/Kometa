using Smde.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Smde;

[DependsOn(typeof(SmdeEntityFrameworkCoreTestModule))]
public class SmdeDomainTestModule : AbpModule
{

}