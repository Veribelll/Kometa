using Kometa.Graphql.DataLoader;
using GreenDonut;
using Volo.Abp.Identity;
using Volo.Abp.Uow;

namespace Smde.Identity;

public class IdentityUserDataLoader : BaseDataLoader<IdentityUser>
{
    public IdentityUserDataLoader(
        IBatchScheduler batchScheduler,
        IUnitOfWorkManager unitOfWorkManager,
        ISmdeIdentityUserRepository repository,
        DataLoaderOptions? options = null) : base(batchScheduler, unitOfWorkManager, repository, options)
    {
    }
}