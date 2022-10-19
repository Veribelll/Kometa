using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;

namespace Smde.Notification;

public class NotificationDataResolve : INotificationDataResolve, ITransientDependency
{
    protected readonly NotificationDataResolveOptions Options;
    protected readonly IServiceProvider ServiceProvider;

    public NotificationDataResolve(IOptions<NotificationDataResolveOptions> options, IServiceProvider serviceProvider)
    {
        Options = options.Value;
        ServiceProvider = serviceProvider;
    }
    
    public async Task<NotificationDataResolveResult> ResolveDataAsync(NotificationDataResolveArguments arguments)
    {
        using var scope = ServiceProvider.CreateScope();
        var context = new NotificationDataResolveContext(scope.ServiceProvider);

        foreach (var resolver in Options.Resolvers)
        {
            await resolver.ResolveAsync(context, arguments);
        }

        return context.Data;
    }
}