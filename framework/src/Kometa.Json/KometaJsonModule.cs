using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Json;
using Volo.Abp.Json.SystemTextJson;
using Volo.Abp.Modularity;

namespace Kometa.Json;

[DependsOn(typeof(AbpJsonModule))]
[DependsOn(typeof(KometaCoreModule))]
public class KometaJsonModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpJsonOptions>(options =>
        {
            options.UseHybridSerializer = true;
        });

        Configure<AbpSystemTextJsonSerializerOptions>(options =>
        {
            options.JsonSerializerOptions.Converters.Add(new AbstractClassConverterFactory(
                options.JsonSerializerOptions.PropertyNamingPolicy,
                context.Services.GetRequiredService<IJsonSerializer>()));
        });
    }
}