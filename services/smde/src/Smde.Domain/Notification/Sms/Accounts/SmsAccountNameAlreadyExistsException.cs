using Volo.Abp;

namespace Smde.Notification.Sms.Accounts;

public class SmsAccountNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public SmsAccountNameAlreadyExistsException(string name) : base("Error:SmsAccount:001")
    {
        Name = name;
    }
}