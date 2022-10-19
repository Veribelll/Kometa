using Smde.Emex.Orders;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Smde.EntityFrameworkCore.Repositories;

public class EmexProductRepository : EfCoreRepository<SmdeDbContext, EmexProduct, Guid>, IEmexProductRepository
{
    public EmexProductRepository(IDbContextProvider<SmdeDbContext> dbContextProvider) : base(dbContextProvider)
    {
    }
}