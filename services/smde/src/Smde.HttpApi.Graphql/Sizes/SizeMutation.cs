using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.SizeManagementPermissions.Sizes;

namespace Smde.Sizes;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class SizeMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(SizeNameAlreadyExistsException))]
    public Task<Size> CreateSize(
        CreateSizeInput input,
        ISizeService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(SizeNameAlreadyExistsException))]
    public Task<Size> UpdateSize(
        UpdateSizeInput input,
        ISizeService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Size> DeleteSize(
        [ID(nameof(Size))] Guid id,
        ISizeService service) =>
        service.DeleteAsync(id);
}