using Smde.Identity;
using Smde.Tenants;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Threading;

namespace Smde;

public static class SmdeModuleExtensionConfigurator
{
    private static readonly OneTimeRunner OneTimeRunner = new();

    public static void Configure()
    {
        OneTimeRunner.Run(() =>
        {
            ConfigureExistingProperties();
            ConfigureExtraProperties();
        });
    }

    private static void ConfigureExistingProperties()
    {
    }

    private static void ConfigureExtraProperties()
    {
        ObjectExtensionManager.Instance
            .Modules()
            .ConfigureTenantManagement(m =>
            {
                m.ConfigureTenant(config =>
                {
                    config.AddOrUpdateProperty<string>(TenantConstants.NamePropertyEmailForDocuments);
                    config.AddOrUpdateProperty<bool>(TenantConstants.NamePropertyEmailForDocumentsConfirmed,
                        options => { options.DefaultValue = false; });
                });
            })
            .ConfigureIdentity(m =>
            {
                m.ConfigureUser(config =>
                {
                    config.AddOrUpdateProperty<List<Guid>>(IdentityUserConstants.NamePropertyContractorIds,
                            opt => { opt.DefaultValue = new List<Guid>(); })
                        .AddOrUpdateProperty<string?>(IdentityUserConstants.NamePropertyMiddleName,
                            opt => { opt.DefaultValue = null; })
                        .AddOrUpdateProperty<bool>(IdentityUserConstants.NamePropertyIsEmployee,
                            opt => { opt.DefaultValue = false; });
                });
            });
    }
}