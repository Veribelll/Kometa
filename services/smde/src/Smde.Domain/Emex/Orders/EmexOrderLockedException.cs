using Volo.Abp;

namespace Smde.Emex.Orders;

public class EmexOrderLockedException : BusinessException
{
    public Guid Id { get; }

    public EmexOrderLockedException(Guid id) : base("Error:EmexOrder:003")
    {
        Id = id;
    }
}