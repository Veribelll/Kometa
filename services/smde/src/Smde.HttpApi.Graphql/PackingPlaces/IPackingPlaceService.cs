using Kometa.Graphql;

namespace Smde.PackingPlaces;

public interface IPackingPlaceService : IGraphqlService
{
    Task<PackingPlace> CreateAsync(CreatePackingPlaceInput input);
    Task<PackingPlace> UpdateAsync(UpdatePackingPlaceInput input);
    Task<PackingPlace> DeleteAsync(Guid id);
    Task<PackingPlace> SendAsync(Guid id);
}