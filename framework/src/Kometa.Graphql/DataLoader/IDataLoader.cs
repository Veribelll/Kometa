using Volo.Abp.Domain.Entities;

namespace Kometa.Graphql.DataLoader;

public interface IDataLoader<T> : IDataLoader<Guid, T> where T : IEntity<Guid>
{
    Task<T?> LoadOrNullAsync(Guid? key, CancellationToken cancellationToken);
}