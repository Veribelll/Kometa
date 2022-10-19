using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace Kometa.Data;

[DependsOn(typeof(AbpDataModule))]
[DependsOn(typeof(KometaCoreModule))]
public class KometaDataModule : AbpModule
{

}