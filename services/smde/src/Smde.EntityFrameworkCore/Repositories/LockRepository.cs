using Smde.LastMiles.Postamats.Controllers;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Smde.EntityFrameworkCore.Repositories;

public class LockRepository : EfCoreRepository<SmdeDbContext, Lock, Guid>, ILockRepository
{
    public LockRepository(IDbContextProvider<SmdeDbContext> dbContextProvider) : base(dbContextProvider)
    {
    }
}