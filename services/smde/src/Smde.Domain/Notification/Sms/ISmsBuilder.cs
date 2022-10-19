namespace Smde.Notification.Sms;

public interface ISmsBuilder
{
    Task<string> BuildAsync(NotificationDataResolveResult data, string template);
}