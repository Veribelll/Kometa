using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.BlobStoring;
using Volo.Abp.Modularity;

namespace Smde;

[DependsOn(typeof(AbpAspNetCoreMvcModule))]
[DependsOn(typeof(AbpBlobStoringModule))]
[DependsOn(typeof(SmdeApplicationContractsModule))]
public class SmdeHttpApiModule : AbpModule
{
        
}