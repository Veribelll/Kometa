using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.LastMileManagementPermissions.AccessKeys;

namespace Smde.LastMiles.AccessKeys;

[ExtendObjectType(OperationTypeNames.Query)]
public class AccessKeyQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(AccessKeyFilterType))]
    public Task<IQueryable<AccessKey>> GetAccessKey(
        [ID(nameof(LastMile))] Guid lastMileId,
        IAccessKeyRepository repository) =>
        GetQueryableAsync(lastMileId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFiltering(typeof(AccessKeyFilterType))]
    [UseSorting(typeof(AccessKeySortType))]
    public Task<IQueryable<AccessKey>> GetAccessKeys(
        [ID(nameof(LastMile))] Guid lastMileId,
        IAccessKeyRepository repository) =>
        GetQueryableAsync(lastMileId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(AccessKeyFilterType))]
    public Task<IQueryable<AccessKey>> GetAccessKeysAny(
        [ID(nameof(LastMile))] Guid lastMileId,
        IAccessKeyRepository repository) =>
        GetQueryableAsync(lastMileId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(AccessKeyFilterType))]
    public Task<IQueryable<AccessKey>> GetAccessKeysCount(
        [ID(nameof(LastMile))] Guid lastMileId,
        IAccessKeyRepository repository) =>
        GetQueryableAsync(lastMileId, repository);

    private static async Task<IQueryable<AccessKey>> GetQueryableAsync(
        Guid lastMileId,
        IAccessKeyRepository repository) =>
        (await repository.GetQueryableAsync()).Where(x => x.LastMileId == lastMileId);
}