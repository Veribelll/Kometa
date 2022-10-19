using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.Emex.Orders.Extend;

[ExtendObjectType(typeof(EmexOrderLockedException))]
public class EmexOrderLockedExceptionExtend : IGraphqlType
{
    public Task<EmexOrder> GetOrder(
        [Parent] EmexOrderLockedException error,
        IDataLoader<EmexOrder> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(error.Id, cancellationToken);
}