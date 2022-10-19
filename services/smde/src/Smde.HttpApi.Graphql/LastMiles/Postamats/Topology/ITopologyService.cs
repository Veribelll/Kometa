using Kometa.Graphql;

namespace Smde.LastMiles.Postamats.Topology;

public interface ITopologyService : IGraphqlService
{
    Task<Postamat> UpdateAsync(UpdateTopologyInput input);
    Task<Postamat> UpdateDisplayAsync(UpdatePostamatDisplayInput input);
}