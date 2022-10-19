using Volo.Abp;

namespace Smde.Emex.Accounts;

public class EmexAccountUserIdAlreadyExistsException : BusinessException
{
    public long UserId { get; }

    public EmexAccountUserIdAlreadyExistsException(long userId) : base("Error:Account:002")
    {
        UserId = userId;
    }
}