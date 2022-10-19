using Kometa.Graphql;

namespace Smde.LastMiles.Postamats.Cells;

public interface ICellService : IGraphqlService
{
    Task<Cell> CreateAsync(CreateCellInput input);
    Task<Cell> UpdateAsync(UpdateCellInput input);
    Task<Cell> ActivateAsync(Guid postamatId, Guid cellId);
    Task<Cell> DeactivateAsync(Guid postamatId, Guid cellId);
    Task<Cell> DeleteAsync(Guid postamatId, Guid cellId);
}
