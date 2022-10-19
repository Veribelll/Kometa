using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.LastMiles.Postamats.Topology;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class TopologyMutation : IGraphqlType
{
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> UpdateTopology(
        UpdateTopologyInput input,
        ITopologyService service) =>
        service.UpdateAsync(input);

    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> UpdatePostamatDisplay(
        UpdatePostamatDisplayInput input,
        ITopologyService service) =>
        service.UpdateDisplayAsync(input);
}