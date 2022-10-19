using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Uow;

namespace Kometa.Graphql.DataLoader;

public class BaseDataLoader<T> : BatchDataLoader<Guid, T>, IDataLoader<T>, IScopedDependency
    where T : Entity<Guid>
{
    protected IUnitOfWorkManager UnitOfWorkManager { get; }
    protected IReadOnlyRepository<T, Guid> Repository { get; }

    public BaseDataLoader(
        IBatchScheduler batchScheduler,
        IUnitOfWorkManager unitOfWorkManager,
        IReadOnlyRepository<T, Guid> repository,
        DataLoaderOptions? options = null) : base(batchScheduler, options)
    {
        UnitOfWorkManager = unitOfWorkManager;
        Repository = repository;
    }

    protected override async Task<IReadOnlyDictionary<Guid, T>> LoadBatchAsync(IReadOnlyList<Guid> keys,
        CancellationToken cancellationToken)
    {
        using var uow = UnitOfWorkManager.Begin(true);
        var entities = await Repository.GetListAsync(x => keys.Contains(x.Id), true, cancellationToken);
        return entities.ToDictionary(x => x.Id);
    }

    public async Task<T?> LoadOrNullAsync(Guid? key, CancellationToken cancellationToken)
    {
        if (!key.HasValue)
        {
            return null;
        }

        return await LoadAsync(key.Value, cancellationToken);
    }
}