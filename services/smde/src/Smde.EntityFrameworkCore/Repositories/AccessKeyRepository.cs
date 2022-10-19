using Smde.LastMiles.AccessKeys;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Smde.EntityFrameworkCore.Repositories;

public class AccessKeyRepository: EfCoreRepository<SmdeDbContext, AccessKey, Guid>, IAccessKeyRepository
{
    public AccessKeyRepository(IDbContextProvider<SmdeDbContext> dbContextProvider) : base(dbContextProvider)
    {
    }
}