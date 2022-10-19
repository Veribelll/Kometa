using Volo.Abp;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestLocationNotSpecifiedException : BusinessException
{
    public ReturnRequestLocationNotSpecifiedException(): base("Error:ReturnRequest:001")
    {
    }
}