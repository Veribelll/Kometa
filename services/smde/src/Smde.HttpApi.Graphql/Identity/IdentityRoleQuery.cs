using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;
using static Volo.Abp.Identity.IdentityPermissions.Roles;

namespace Smde.Identity;

[ExtendObjectType(OperationTypeNames.Query)]
public class IdentityRoleQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<IdentityRole> GetIdentityRoleById(
        [ID(nameof(IdentityRole))] Guid id,
        IIdentityRoleRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetAsync(id, true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(IdentityRoleFilterType))]
    public Task<List<IdentityRole>> GetIdentityRole(
        IIdentityRoleRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetListAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<IdentityRoleType>))]
    [UseFiltering(typeof(IdentityRoleFilterType))]
    [UseSorting]
    public Task<List<IdentityRole>> GetIdentityRoles(
        IIdentityRoleRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetListAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(IdentityRoleFilterType))]
    public Task<List<IdentityRole>> GetIdentityRolesAny(
        IIdentityRoleRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetListAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(IdentityRoleFilterType))]
    public Task<List<IdentityRole>> GetIdentityRolesCount(
        IIdentityRoleRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetListAsync(true, cancellationToken);
}