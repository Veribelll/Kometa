using Kometa.Graphql;
using Kometa.Graphql.DataLoader;
using GreenDonut;
using Volo.Abp.Uow;

namespace Smde.LastMiles.Postamats.Controllers;

public class LockDataLoader : BaseDataLoader<Lock>, IGraphqlService
{
    public LockDataLoader(
        IBatchScheduler batchScheduler,
        IUnitOfWorkManager unitOfWorkManager,
        ILockRepository repository,
        DataLoaderOptions? options = null) : base(batchScheduler, unitOfWorkManager, repository, options)
    {
    }
}