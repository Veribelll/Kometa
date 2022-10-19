using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.PackingPlaces.ShipmentRequests.Extend;

[ExtendObjectType(typeof(ShipmentRequestLockedException))]
public class ShipmentRequestLockedExceptionExtend : IGraphqlType
{
    public Task<ShipmentRequest> GetShipmentRequest(
        [Parent] ShipmentRequestLockedException error,
        IDataLoader<ShipmentRequest> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(error.Id, cancellationToken);
}