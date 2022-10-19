using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.PackingPlaceManagementPermissions.ShipmentRequests;

namespace Smde.PackingPlaces.ShipmentRequests;

[ExtendObjectType(OperationTypeNames.Query)]
public class ShipmentRequestQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<ShipmentRequest> GetShipmentRequestById(
        [ID(nameof(ShipmentRequest))] Guid id,
        IDataLoader<ShipmentRequest> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(ShipmentRequestFilterType))]
    public Task<IQueryable<ShipmentRequest>> GetShipmentRequest(
        IRepository<ShipmentRequest, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<ShipmentRequestType>))]
    [UseFiltering(typeof(ShipmentRequestFilterType))]
    [UseSorting(typeof(ShipmentRequestSortType))]
    public Task<IQueryable<ShipmentRequest>> GetShipmentRequests(
        IRepository<ShipmentRequest, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(ShipmentRequestFilterType))]
    public Task<IQueryable<ShipmentRequest>> GetShipmentRequestsAny(
        IRepository<ShipmentRequest, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(ShipmentRequestFilterType))]
    public Task<IQueryable<ShipmentRequest>> GetShipmentRequestsCount(
        IRepository<ShipmentRequest, Guid> repository) =>
        repository.GetQueryableAsync();
}