using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Smde.Orders;
using Smde.PackingPlaces;
using static Smde.Permissions.EmexPermissions.Orders;

namespace Smde.Emex.Orders;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class EmexOrderMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceLockedException))]
    [Error(typeof(TypeOrderIsNotCorrectException))]
    [Error(typeof(EmexOrderExternalIdAlreadyExistsException))]
    [Error(typeof(EmexOrderCustomerIdIsNotEqualException))]
    public Task<EmexOrder> CreateEmexOrder(
        CreateEmexOrderInput input,
        IEmexOrderService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexOrderLockedException))]
    [Error(typeof(PackingPlaceLockedException))]
    [Error(typeof(EmexProductLockedException))]
    [Error(typeof(TypeOrderIsNotCorrectException))]
    [Error(typeof(EmexOrderExternalIdAlreadyExistsException))]
    [Error(typeof(EmexOrderCustomerIdIsNotEqualException))]
    public Task<EmexOrder> UpdateEmexOrder(
        UpdateEmexOrderInput input,
        IEmexOrderService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexOrderLockedException))]
    public Task<EmexOrder> DeleteEmexOrder(
        [ID(nameof(EmexOrder))] Guid id,
        IEmexOrderService service) =>
        service.DeleteAsync(id);

    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexOrderLockedException))]
    [Error(typeof(PackingPlaceLockedException))]
    [Error(typeof(EmexProductLockedException))]
    [Error(typeof(TypeOrderIsNotCorrectException))]
    [Error(typeof(EmexOrderCustomerIdIsNotEqualException))]
    public Task<EmexProduct> CreateEmexProduct(
        [ID(nameof(EmexOrder))] Guid orderId,
        EmexProductInput product,
        IEmexOrderService service) =>
        service.CreateProductAsync(orderId, product);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexOrderLockedException))]
    [Error(typeof(PackingPlaceLockedException))]
    [Error(typeof(EmexProductLockedException))]
    [Error(typeof(TypeOrderIsNotCorrectException))]
    [Error(typeof(EmexOrderCustomerIdIsNotEqualException))]
    public Task<EmexProduct> UpdateEmexProduct(
        [ID(nameof(EmexOrder))] Guid orderId,
        [ID(nameof(EmexProduct))] Guid productId,
        EmexProductInput product,
        IEmexOrderService service) =>
        service.UpdateProductAsync(orderId, productId, product);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexOrderLockedException))]
    [Error(typeof(EmexProductLockedException))]
    public Task<EmexProduct> DeleteEmexProduct(
        [ID(nameof(EmexOrder))] Guid orderId,
        [ID(nameof(EmexProduct))] Guid productId,
        IEmexOrderService service) =>
        service.DeleteProductAsync(orderId, productId);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexOrderLockedException))]
    [Error(typeof(PackingPlaceLockedException))]
    [Error(typeof(EmexProductLockedException))]
    [Error(typeof(TypeOrderIsNotCorrectException))]
    [Error(typeof(EmexOrderCustomerIdIsNotEqualException))]
    public Task<EmexProduct> EmexProductAssignToPackingPlace(
        [ID(nameof(EmexOrder))] Guid orderId,
        [ID(nameof(EmexProduct))] Guid productId,
        [ID(nameof(PackingPlace))] Guid packingPlaceId,
        IEmexOrderService service) =>
        service.AssignToPackingPlace(orderId, productId, packingPlaceId);
}