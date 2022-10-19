namespace Smde.Notification;

public interface INotificationDataResolveContributor
{
    Task ResolveAsync(INotificationDataResolveContext context, NotificationDataResolveArguments arguments);
}