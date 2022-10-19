using Volo.Abp;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestLockedException: BusinessException
{
    public Guid Id { get; }

    public ReturnRequestLockedException(Guid id): base(nameof(ReturnRequestLockedException))
    {
        Id = id;
    }
}