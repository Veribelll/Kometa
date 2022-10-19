using Smde.Orders;

namespace Smde.Notification;

public class NotificationDataResolveContext: INotificationDataResolveContext
{
    public IServiceProvider ServiceProvider { get; set; }

    public NotificationDataResolveResult Data { get; set; } = new();

    public NotificationDataResolveContext(IServiceProvider serviceProvider)
    {
        ServiceProvider = serviceProvider;
    }
}