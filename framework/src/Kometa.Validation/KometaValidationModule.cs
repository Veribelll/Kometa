using Volo.Abp.Modularity;
using Volo.Abp.Validation;

namespace Kometa.Validation;

[DependsOn(typeof(AbpValidationModule))]
public class KometaValidationModule : AbpModule
{

}