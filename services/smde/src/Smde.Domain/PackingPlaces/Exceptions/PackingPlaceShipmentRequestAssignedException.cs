using Volo.Abp;

namespace Smde.PackingPlaces;

public class PackingPlaceShipmentRequestAssignedException : BusinessException
{
    public Guid ShipmentId { get; }

    public PackingPlaceShipmentRequestAssignedException(Guid shipmentId) : base("Error:PackingPlace:003")
    {
        ShipmentId = shipmentId;
    }
}