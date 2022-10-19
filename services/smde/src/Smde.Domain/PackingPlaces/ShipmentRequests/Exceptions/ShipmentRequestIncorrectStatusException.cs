using Volo.Abp;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestIncorrectStatusException : BusinessException
{
    public ShipmentRequestStatus Current { get; }
    public ShipmentRequestStatus Next { get; }

    public ShipmentRequestIncorrectStatusException(ShipmentRequestStatus current, ShipmentRequestStatus next)
        : base(nameof(ShipmentRequestIncorrectStatusException))
    {
        Current = current;
        Next = next;
    }
}