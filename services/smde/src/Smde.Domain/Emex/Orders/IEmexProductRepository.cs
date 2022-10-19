using Volo.Abp.Domain.Repositories;

namespace Smde.Emex.Orders;

public interface IEmexProductRepository : IReadOnlyRepository<EmexProduct, Guid>
{
}