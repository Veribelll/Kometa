using Volo.Abp.Modularity;
using Volo.Abp.Security;

namespace Kometa.Security;

[DependsOn(typeof(AbpSecurityModule))]
[DependsOn(typeof(KometaCoreModule))]
public class KometaSecurityModule : AbpModule
{
}