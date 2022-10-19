using Volo.Abp;

namespace Smde.Emex.Orders;

public class EmexOrderCustomerIdIsNotEqualException : BusinessException
{
    public Guid Current { get; }
    public Guid? Verifiable { get; }
    public Guid PackingPlaceId { get; }

    public EmexOrderCustomerIdIsNotEqualException(Guid current, Guid? verifiable, Guid packingPlaceId) : base("Error:EmexOrder:002")
    {
        Current = current;
        Verifiable = verifiable;
        PackingPlaceId = packingPlaceId;
    }
}