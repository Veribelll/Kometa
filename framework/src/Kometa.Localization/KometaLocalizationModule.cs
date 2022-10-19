using Kometa.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Kometa;

[DependsOn(typeof(AbpLocalizationModule))]
public class KometaLocalizationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<KometaLocalizationModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<KometaResource>("ru")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/Kometa");

            options.DefaultResourceType = typeof(KometaResource);
        });
    }
}