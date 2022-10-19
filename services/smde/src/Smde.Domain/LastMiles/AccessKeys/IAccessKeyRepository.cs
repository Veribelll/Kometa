using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.AccessKeys;

public interface IAccessKeyRepository: IReadOnlyRepository<AccessKey, Guid>
{
    
}