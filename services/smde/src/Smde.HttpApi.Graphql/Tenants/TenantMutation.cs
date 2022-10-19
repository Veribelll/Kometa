using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class TenantMutation : IGraphqlType
{
    [Authorize(Policy = TenantManagementPermissions.Tenants.Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TenantNameAlreadyExistsException))]
    public Task<Tenant> CreateTenant(
        CreateTenantInput input,
        ITenantService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = TenantManagementPermissions.Tenants.Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TenantNameAlreadyExistsException))]
    public Task<Tenant> UpdateTenant(
        UpdateTenantInput input,
        ITenantService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = TenantManagementPermissions.Tenants.Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Tenant> DeleteTenant(
        DeleteTenantInput input,
        ITenantService service) =>
        service.DeleteAsync(input.Id);
}