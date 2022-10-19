using Volo.Abp;
using Volo.Abp.Identity;

namespace Smde.Identity;

public class IdentityUserSelfDeletionException : BusinessException
{
    public IdentityUserSelfDeletionException(): base(IdentityErrorCodes.UserSelfDeletion)
    {
        
    }
}