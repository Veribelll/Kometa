using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.Postamats.Cells;

public interface ICellRepository : IReadOnlyRepository<Cell, Guid>
{
}