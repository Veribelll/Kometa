using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.Emex.Orders.Extend;

[ExtendObjectType(typeof(EmexProductLockedException))]
public class EmexProductLockedExceptionExtend : IGraphqlType
{
    public Task<EmexProduct> GetProduct(
        [Parent] EmexProductLockedException error,
        IEmexProductRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetAsync(error.Id, true, cancellationToken);
}