using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.TenantManagement;
using static Volo.Abp.TenantManagement.TenantManagementPermissions.Tenants;

namespace Smde.Tenants;

[ExtendObjectType(OperationTypeNames.Query)]
public class TenantQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(TenantFilterType))]
    public Task<IQueryable<Tenant>> GetTenant(
        IRepository<Tenant, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<TenantType>))]
    [UseFiltering(typeof(TenantFilterType))]
    [UseSorting]
    public Task<IQueryable<Tenant>> GetTenants(
        IRepository<Tenant, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(TenantFilterType))]
    public Task<IQueryable<Tenant>> GetTenantsAny(
        IRepository<Tenant, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(TenantFilterType))]
    public Task<IQueryable<Tenant>> GetTenantsCount(
        IRepository<Tenant, Guid> repository) =>
        repository.GetQueryableAsync();
}