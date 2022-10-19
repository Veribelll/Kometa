using Volo.Abp;

namespace Smde.Emex.Orders;

public class EmexOrderExternalIdAlreadyExistsException: BusinessException
{
    public string ExternalId { get; }

    public EmexOrderExternalIdAlreadyExistsException(string externalId) : base("Error:EmexOrder:001")
    {
        ExternalId = externalId;
    }
}