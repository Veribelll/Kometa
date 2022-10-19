using Kometa.Graphql;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants;

public interface ITenantService : IGraphqlService
{
    Task<Tenant> CreateAsync(CreateTenantInput input);
    Task<Tenant> UpdateAsync(UpdateTenantInput input);
    Task<Tenant> DeleteAsync(Guid id);
}