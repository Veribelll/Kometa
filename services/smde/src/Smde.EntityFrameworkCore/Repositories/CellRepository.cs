using Smde.LastMiles.Postamats.Cells;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Smde.EntityFrameworkCore.Repositories;

public class CellRepository: EfCoreRepository<SmdeDbContext, Cell, Guid>, ICellRepository
{
    public CellRepository(IDbContextProvider<SmdeDbContext> dbContextProvider) : base(dbContextProvider)
    {
    }
}