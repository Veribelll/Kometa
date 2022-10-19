using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace Kometa.AspNetCore.Mvc;

[DependsOn(typeof(AbpAspNetCoreMvcContractsModule))]
[DependsOn(typeof(KometaCoreModule))]
public class KometaAspNetCoreMvcContractsModule : AbpModule
{

}