using Volo.Abp.DependencyInjection;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants
{
    [Dependency(ReplaceServices = true)]
    public class SmdeTenantManager : TenantManager
    {
        public SmdeTenantManager(ITenantRepository tenantRepository) : base(tenantRepository)
        {
        }

        protected override async Task ValidateNameAsync(string name, Guid? expectedId = null)
        {
            var tenant = await TenantRepository.FindByNameAsync(name);
            if (tenant is not null && tenant.Id != expectedId)
            {
                throw new TenantNameAlreadyExistsException(name);
            }
        }
    }
}