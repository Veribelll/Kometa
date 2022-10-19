using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants.Extend;

[ExtendObjectType(typeof(TenantNameAlreadyExistsException))]
public class TenantNameAlreadyExistsExceptionExtend : IGraphqlType
{
    public async Task<Tenant> GetTenant(
        [Parent] TenantNameAlreadyExistsException error,
        IRepository<Tenant, Guid> repository,
        CancellationToken cancellationToken) =>
        await repository.GetAsync(x => x.Name == error.Name, true, cancellationToken);
}