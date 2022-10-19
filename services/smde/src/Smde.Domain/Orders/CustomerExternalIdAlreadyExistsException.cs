using Volo.Abp;

namespace Smde.Orders;

public class CustomerExternalIdAlreadyExistsException : BusinessException
{
    public string ExternalId { get; }

    public CustomerExternalIdAlreadyExistsException(string externalId) : base("Error:EmexCustomer:001")
    {
        ExternalId = externalId;
    }
}