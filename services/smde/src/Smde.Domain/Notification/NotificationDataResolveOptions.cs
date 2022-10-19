namespace Smde.Notification;

public class NotificationDataResolveOptions
{
    public List<INotificationDataResolveContributor> Resolvers { get; } = new();
}