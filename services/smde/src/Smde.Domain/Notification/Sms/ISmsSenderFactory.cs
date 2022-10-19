using Smde.Notification.Sms.Accounts;

namespace Smde.Notification.Sms;

public interface ISmsSenderFactory
{
    Task<ISmsSender> GetAsync(SmsAccount account);
}