using Volo.Abp.Data;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants
{
    public static class TenantExtensions
    {
        public static void SetEmailForDocuments(this Tenant tenant, string value)
        {
            tenant.SetProperty(TenantConstants.NamePropertyEmailForDocuments, value);
        }

        public static string GetEmailForDocuments(this Tenant tenant)
        {
            return (string?)tenant.GetProperty(TenantConstants.NamePropertyEmailForDocuments) ?? "";
        }

        public static void SetEmailForDocumentsConfirmed(this Tenant tenant, bool value)
        {
            tenant.SetProperty(TenantConstants.NamePropertyEmailForDocumentsConfirmed, value);
        }

        public static bool GetEmailForDocumentsConfirmed(this Tenant tenant)
        {
            return (bool?)tenant.GetProperty(TenantConstants.NamePropertyEmailForDocumentsConfirmed) ?? false;
        }
    }
}