using Smde.Identity;
using Smde.Tenants;
using Volo.Abp.Identity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.TenantManagement;
using Volo.Abp.Threading;

namespace Smde.EntityFrameworkCore;

public static class SmdeEfCoreEntityExtensionMappings
{
    private static readonly OneTimeRunner OneTimeRunner = new();

    public static void Configure()
    {
        SmdeGlobalFeatureConfigurator.Configure();
        SmdeModuleExtensionConfigurator.Configure();

        OneTimeRunner.Run(() =>
        {
            ObjectExtensionManager
                .Instance
                .MapEfCoreProperty<Tenant, string>(TenantConstants.NamePropertyEmailForDocuments)
                .MapEfCoreProperty<Tenant, bool>(TenantConstants.NamePropertyEmailForDocumentsConfirmed)
                .MapEfCoreProperty<IdentityUser, string?>(IdentityUserConstants.NamePropertyMiddleName)
                .MapEfCoreProperty<IdentityUser, bool>(IdentityUserConstants.NamePropertyIsEmployee)
                .MapEfCoreProperty<IdentityUser, List<Guid>>(IdentityUserConstants.NamePropertyContractorIds);
        });
    }
}