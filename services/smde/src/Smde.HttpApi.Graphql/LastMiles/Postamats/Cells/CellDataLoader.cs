using Kometa.Graphql;
using Kometa.Graphql.DataLoader;
using GreenDonut;
using Volo.Abp.Uow;

namespace Smde.LastMiles.Postamats.Cells;

public class CellDataLoader : BaseDataLoader<Cell>, IGraphqlService
{
    public CellDataLoader(
        IBatchScheduler batchScheduler,
        IUnitOfWorkManager unitOfWorkManager,
        ICellRepository repository,
        DataLoaderOptions? options = null) : base(batchScheduler, unitOfWorkManager, repository, options)
    {
    }
}