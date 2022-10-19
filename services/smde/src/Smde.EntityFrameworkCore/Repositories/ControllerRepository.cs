using Smde.LastMiles.Postamats.Controllers;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Smde.EntityFrameworkCore.Repositories;

public class ControllerRepository: EfCoreRepository<SmdeDbContext, ControllerBase, Guid>, IControllerRepository
{
    public ControllerRepository(IDbContextProvider<SmdeDbContext> dbContextProvider) : base(dbContextProvider)
    {
    }
}