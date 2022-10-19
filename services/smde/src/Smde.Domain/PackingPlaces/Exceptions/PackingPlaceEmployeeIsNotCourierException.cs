using Volo.Abp;

namespace Smde.PackingPlaces;

public class PackingPlaceEmployeeIsNotCourierException : BusinessException
{
    public Guid IdentityUserId { get; }

    public PackingPlaceEmployeeIsNotCourierException(Guid identityUserId) : base("Error:PackingPlace:004")
    {
        IdentityUserId = identityUserId;
    }
}