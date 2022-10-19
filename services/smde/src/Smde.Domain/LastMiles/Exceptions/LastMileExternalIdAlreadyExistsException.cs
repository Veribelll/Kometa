using Volo.Abp;

namespace Smde.LastMiles;

public class LastMileExternalIdAlreadyExistsException : BusinessException
{
    public string ExternalId { get; }

    public LastMileExternalIdAlreadyExistsException(string externalId) : base("Error:LastMile:002")
    {
        ExternalId = externalId;
    }
}