using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.Postamats.Controllers;

public interface ILockRepository : IReadOnlyRepository<Lock, Guid>
{
    
}