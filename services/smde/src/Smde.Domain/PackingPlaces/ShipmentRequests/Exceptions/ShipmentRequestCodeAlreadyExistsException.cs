using Volo.Abp;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestCodeAlreadyExistsException: BusinessException
{
    public string RequestCode { get; }

    public ShipmentRequestCodeAlreadyExistsException(string requestCode) : base("Error:ShipmentRequest:001")
    {
        RequestCode = requestCode;
    }
}