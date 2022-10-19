using Microsoft.Extensions.DependencyInjection;
using Smde.Orders;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.Threading;

namespace Smde.Notification;

internal class CustomerResolveContributor : INotificationDataResolveContributor
{
    public async Task ResolveAsync(
        INotificationDataResolveContext context,
        NotificationDataResolveArguments arguments)
    {
        if (arguments.CustomerId is null)
        {
            return;
        }
        
        var services = context.ServiceProvider;
        var cancellationToken = services.GetRequiredService<ICancellationTokenProvider>().Token;
        var repository = services.GetRequiredService<IRepository<Customer, Guid>>();
        var customer = await repository.FindAsync(arguments.CustomerId.Value, true, cancellationToken);

        if (customer is null)
        {
            return;
        }
        
        context.Data.CustomerId = customer.ExternalId;
        context.Data.CustomerName = customer.Name;
    }
}