using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.EmexPermissions.Customers;

namespace Smde.Emex.Orders;

[ExtendObjectType(OperationTypeNames.Query)]
public class EmexCustomerQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<EmexCustomer> GetEmexCustomerById(
        [ID(nameof(EmexCustomer))] Guid id,
        IDataLoader<EmexCustomer> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(EmexCustomerFilterType))]
    public Task<IQueryable<EmexCustomer>> GetEmexCustomer(
        IRepository<EmexCustomer, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<EmexCustomerType>))]
    [UseFiltering(typeof(EmexCustomerFilterType))]
    [UseSorting(typeof(EmexCustomerSortType))]
    public Task<IQueryable<EmexCustomer>> GetEmexCustomers(
        IRepository<EmexCustomer, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(EmexCustomerFilterType))]
    public Task<IQueryable<EmexCustomer>> GetEmexCustomersAny(
        IRepository<EmexCustomer, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(EmexCustomerFilterType))]
    public Task<IQueryable<EmexCustomer>> GetEmexCustomersCount(
        IRepository<EmexCustomer, Guid> repository) =>
        repository.GetQueryableAsync();
}