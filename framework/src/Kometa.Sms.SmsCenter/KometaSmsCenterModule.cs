using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Kometa.Sms.SmsCenter;

[DependsOn(typeof(AbpHttpClientModule))]
public class KometaSmsCenterModule : AbpModule
{

}