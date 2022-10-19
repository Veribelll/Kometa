using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.PackingPlaceManagementPermissions.ReturnRequests;

namespace Smde.PackingPlaces.ReturnRequests;

[ExtendObjectType(OperationTypeNames.Query)]
public class ReturnRequestQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<ReturnRequest> GetReturnRequestById(
        [ID(nameof(ReturnRequest))] Guid id,
        IDataLoader<ReturnRequest> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(ReturnRequestFilterType))]
    public Task<IQueryable<ReturnRequest>> GetReturnRequest(
        IRepository<ReturnRequest, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<ReturnRequestType>))]
    [UseFiltering(typeof(ReturnRequestFilterType))]
    [UseSorting(typeof(ReturnRequestSortType))]
    public Task<IQueryable<ReturnRequest>> GetReturnRequests(
        IRepository<ReturnRequest, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(ReturnRequestFilterType))]
    public Task<IQueryable<ReturnRequest>> GetReturnRequestsAny(
        IRepository<ReturnRequest, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(ReturnRequestFilterType))]
    public Task<IQueryable<ReturnRequest>> GetReturnRequestsCount(
        IRepository<ReturnRequest, Guid> repository) =>
        repository.GetQueryableAsync();
}