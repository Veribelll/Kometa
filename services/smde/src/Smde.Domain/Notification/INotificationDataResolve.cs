namespace Smde.Notification;

public interface INotificationDataResolve
{
    Task<NotificationDataResolveResult> ResolveDataAsync(NotificationDataResolveArguments arguments);
}