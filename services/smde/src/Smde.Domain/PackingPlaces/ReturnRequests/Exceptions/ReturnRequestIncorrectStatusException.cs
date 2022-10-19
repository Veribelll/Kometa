using Volo.Abp;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestIncorrectStatusException : BusinessException
{
    public ReturnRequestStatus Current { get; }
    public ReturnRequestStatus Next { get; }

    public ReturnRequestIncorrectStatusException(ReturnRequestStatus current, ReturnRequestStatus next)
        : base("Error:ReturnRequest:002")
    {
        Current = current;
        Next = next;
    }
}