using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;
using IdentityRole = Volo.Abp.Identity.IdentityRole;

namespace Smde.Identity;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class IdentityRoleMutation : IGraphqlType
{
    [Authorize(Policy = IdentityPermissions.Roles.Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<IdentityRole> CreateIdentityRole(
        CreateIdentityRoleInput input,
        IIdentityRoleService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = IdentityPermissions.Roles.Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<IdentityRole> UpdateIdentityRole(
        UpdateIdentityRoleInput input,
        IIdentityRoleService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = IdentityPermissions.Roles.Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<IdentityRole> DeleteIdentityRole(
        [ID(nameof(IdentityRole))] Guid id,
        IIdentityRoleService service) =>
        service.DeleteAsync(id);
}