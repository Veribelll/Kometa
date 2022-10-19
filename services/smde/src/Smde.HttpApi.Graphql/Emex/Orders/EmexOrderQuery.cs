using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.EmexPermissions.Orders;

namespace Smde.Emex.Orders;

[ExtendObjectType(OperationTypeNames.Query)]
public class EmexOrderQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<EmexOrder> GetEmexOrderById(
        [ID(nameof(EmexOrder))] Guid id,
        IDataLoader<EmexOrder> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(EmexOrderFilterType))]
    public Task<IQueryable<EmexOrder>> GetEmexOrder(
        IRepository<EmexOrder, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<EmexOrderType>))]
    [UseFiltering(typeof(EmexOrderFilterType))]
    [UseSorting(typeof(EmexOrderSortType))]
    public Task<IQueryable<EmexOrder>> GetEmexOrders(
        IRepository<EmexOrder, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(EmexOrderFilterType))]
    public Task<IQueryable<EmexOrder>> GetEmexOrdersAny(
        IRepository<EmexOrder, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(EmexOrderFilterType))]
    public Task<IQueryable<EmexOrder>> GetEmexOrdersCount(
        IRepository<EmexOrder, Guid> repository) =>
        repository.GetQueryableAsync();
}