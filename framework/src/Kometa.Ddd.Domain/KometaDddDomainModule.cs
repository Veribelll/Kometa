using Kometa.Data;
using Kometa.MultiContractor;
using Volo.Abp.AutoMapper;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace Kometa.Domain;

[DependsOn(typeof(AbpDddDomainModule))]
[DependsOn(typeof(AbpAutoMapperModule))]
[DependsOn(typeof(KometaDataModule))]
[DependsOn(typeof(KometaMultiContractorModule))]
public class KometaDddDomainModule : AbpModule
{

}