using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.Postamats.Controllers;

public interface IControllerRepository : IReadOnlyRepository<ControllerBase, Guid>
{
}