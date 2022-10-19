using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Smde.Permissions;
using static Smde.Permissions.PackingPlaceManagementPermissions.ShipmentRequests;

namespace Smde.PackingPlaces.ShipmentRequests;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class ShipmentRequestMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ShipmentRequestCodeAlreadyExistsException))]
    public Task<ShipmentRequest> CreateShipmentRequest(
        CreateShipmentRequestInput input,
        IShipmentRequestService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ShipmentRequestLockedException))]
    [Error(typeof(ShipmentRequestCodeAlreadyExistsException))]
    public Task<ShipmentRequest> UpdateShipmentRequest(
        UpdateShipmentRequestInput input,
        IShipmentRequestService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ShipmentRequestLockedException))]
    public Task<ShipmentRequest> DeleteShipmentRequest(
        [ID(nameof(ShipmentRequest))] Guid id,
        IShipmentRequestService service) =>
        service.DeleteAsync(id);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceIncorrectStatusException))]
    [Error(typeof(ShipmentRequestIncorrectStatusException))]
    public Task<ShipmentRequest> CancelShipmentRequest(
        [ID(nameof(ShipmentRequest))] Guid id,
        IShipmentRequestService service) =>
        service.CancelAsync(id);

    [Authorize(Policy = PackingPlaceManagementPermissions.PackingPlaces.Send)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceIncorrectStatusException))]
    [Error(typeof(ShipmentRequestIncorrectStatusException))]
    public Task<ShipmentRequest> SendShipmentRequest(
        [ID(nameof(ShipmentRequest))] Guid id,
        IShipmentRequestService service) =>
        service.SendAsync(id);
}