using Volo.Abp;

namespace Smde.Identity;

public class IdentityUserEmailAlreadyExistsException : BusinessException
{
    public string Email { get; }

    public IdentityUserEmailAlreadyExistsException(string email) : base("Error:Employee:001")
    {
        Email = email;
    }
}