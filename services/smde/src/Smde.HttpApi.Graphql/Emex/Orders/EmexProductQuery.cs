using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.EmexPermissions.Orders;

namespace Smde.Emex.Orders;

[ExtendObjectType(OperationTypeNames.Query)]
public class EmexProductQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<EmexProduct> GetEmexProductById(
        [ID(nameof(EmexProduct))] Guid id,
        IDataLoader<EmexProduct> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(EmexProductFilterType))]
    public Task<IQueryable<EmexProduct>> GetEmexProduct(
        IEmexProductRepository repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<EmexProductType>))]
    [UseFiltering(typeof(EmexProductFilterType))]
    [UseSorting(typeof(EmexProductSortType))]
    public Task<IQueryable<EmexProduct>> GetEmexProducts(
        IEmexProductRepository repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(EmexProductFilterType))]
    public Task<IQueryable<EmexProduct>> GetEmexProductsAny(
        IEmexProductRepository repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(EmexProductFilterType))]
    public Task<IQueryable<EmexProduct>> GetEmexProductsCount(
        IEmexProductRepository repository) =>
        repository.GetQueryableAsync();
}