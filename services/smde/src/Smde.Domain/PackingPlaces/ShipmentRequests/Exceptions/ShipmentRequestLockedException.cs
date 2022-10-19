using Volo.Abp;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestLockedException: BusinessException
{
    public Guid Id { get; }

    public ShipmentRequestLockedException(Guid id): base(nameof(ShipmentRequestLockedException))
    {
        Id = id;
    }
}