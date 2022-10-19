using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.MultiTenancy;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants.Extend;

[ExtendObjectType(typeof(IMultiTenant))]
public class MultiTenantExtensions : IGraphqlType
{
    public Task<Tenant?> GetTenant(
        [Parent] IMultiTenant multiTenant,
        IDataLoader<Tenant> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadOrNullAsync(multiTenant.TenantId, cancellationToken);
}