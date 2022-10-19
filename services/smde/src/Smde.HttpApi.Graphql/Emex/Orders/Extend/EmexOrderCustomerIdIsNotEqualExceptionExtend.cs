using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.PackingPlaces;

namespace Smde.Emex.Orders.Extend;

[ExtendObjectType(typeof(EmexOrderCustomerIdIsNotEqualException))]
public class EmexOrderCustomerIdIsNotEqualExceptionExtend : IGraphqlType
{
    public Task<EmexCustomer> GetCustomerCurrent(
        [Parent] EmexOrderCustomerIdIsNotEqualException error,
        IDataLoader<EmexCustomer> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(error.Current, cancellationToken);

    public Task<EmexCustomer?> GetCustomerVerifiable(
        [Parent] EmexOrderCustomerIdIsNotEqualException error,
        IDataLoader<EmexCustomer> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadOrNullAsync(error.Verifiable, cancellationToken);

    public Task<PackingPlace> GetPackingPlace(
        [Parent] EmexOrderCustomerIdIsNotEqualException error,
        IDataLoader<PackingPlace> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(error.PackingPlaceId, cancellationToken);
}