using Smde.Orders;
using Volo.Abp.DependencyInjection;

namespace Smde.Notification;

public interface INotificationDataResolveContext : IServiceProviderAccessor
{
    NotificationDataResolveResult Data { get; }
}