using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.PackingPlaces.Extend;

[ExtendObjectType(typeof(PackingPlaceLockedException))]
public class PackingPlaceLockedExceptionExtend : IGraphqlType
{
    public Task<PackingPlace> GetPackingPlace(
        [Parent] PackingPlaceLockedException error,
        IDataLoader<PackingPlace> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(error.Id, cancellationToken);
}