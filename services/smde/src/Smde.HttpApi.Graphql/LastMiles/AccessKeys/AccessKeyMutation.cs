using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.LastMileManagementPermissions.AccessKeys;

namespace Smde.LastMiles.AccessKeys;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class AccessKeyMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<AccessKey> CreateAccessKey(
        CreateAccessKeyInput input,
        IAccessKeyService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<AccessKey> UpdateAccessKey(
        UpdateAccessKeyInput input,
        IAccessKeyService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<AccessKey> DeleteAccessKey(
        [ID(nameof(LastMile))] Guid lastMileId,
        [ID(nameof(AccessKey))] Guid id,
        IAccessKeyService service) =>
        service.DeleteAsync(lastMileId, id);
}