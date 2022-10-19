using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.PackingPlaces.ReturnRequests.Extend;

[ExtendObjectType(typeof(ReturnRequestLockedException))]
public class ReturnRequestLockedExceptionExtend : IGraphqlType
{
    public Task<ReturnRequest> GetReturnRequest(
        [Parent] ReturnRequestLockedException error,
        IDataLoader<ReturnRequest> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(error.Id, cancellationToken);
}