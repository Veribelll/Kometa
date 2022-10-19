using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;
using static Smde.Permissions.PackingPlaceManagementPermissions.PackingPlaces;

namespace Smde.PackingPlaces;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class PackingPlaceMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceBarcodeAlreadyExistsException))]
    public Task<PackingPlace> CreatePackingPlace(
        CreatePackingPlaceInput input,
        IPackingPlaceService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceLockedException))]
    [Error(typeof(PackingPlaceBarcodeAlreadyExistsException))]
    [Error(typeof(PackingPlaceShipmentRequestAssignedException))]
    [Error(typeof(PackingPlaceEmployeeIsNotCourierException))]
    public Task<PackingPlace> UpdatePackingPlace(
        UpdatePackingPlaceInput input,
        IPackingPlaceService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceLockedException))]
    public Task<PackingPlace> DeletePackingPlace(
        [ID(nameof(PackingPlace))] Guid id,
        IPackingPlaceService service) =>
        service.DeleteAsync(id);

    [Authorize(Policy = Send)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceIncorrectStatusException))]
    public Task<PackingPlace> SendPackingPlace(
        [ID(nameof(PackingPlace))] Guid id,
        IPackingPlaceService service) =>
        service.SendAsync(id);
}