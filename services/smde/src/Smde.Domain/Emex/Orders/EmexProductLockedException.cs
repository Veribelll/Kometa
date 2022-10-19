using Volo.Abp;

namespace Smde.Emex.Orders;

public class EmexProductLockedException : BusinessException
{
    public Guid Id { get; }

    public EmexProductLockedException(Guid id): base("Error:EmexProduct:001")
    {
        Id = id;
    }
}