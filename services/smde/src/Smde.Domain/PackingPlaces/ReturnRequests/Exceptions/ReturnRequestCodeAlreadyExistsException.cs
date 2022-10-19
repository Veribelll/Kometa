using Volo.Abp;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestCodeAlreadyExistsException: BusinessException
{
    public string RequestCode { get; }

    public ReturnRequestCodeAlreadyExistsException(string requestCode): base("Error:ReturnRequest:003")
    {
        RequestCode = requestCode;
    }
}