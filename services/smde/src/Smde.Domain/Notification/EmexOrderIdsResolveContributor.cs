using Microsoft.Extensions.DependencyInjection;
using Smde.Emex.Orders;
using Smde.Orders;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.Threading;

namespace Smde.Notification;

internal class EmexOrderIdsResolveContributor : INotificationDataResolveContributor
{
    public async Task ResolveAsync(
        INotificationDataResolveContext context,
        NotificationDataResolveArguments arguments)
    {
        if (arguments.TypeOrder != TypeOrder.Emex)
        {
            return;
        }
        
        var services = context.ServiceProvider;
        var cancellationToken = services.GetRequiredService<ICancellationTokenProvider>().Token;
        var repository = services.GetRequiredService<IRepository<EmexOrder, Guid>>();
        var asyncExecuter = services.GetRequiredService<IAsyncQueryableExecuter>();
        var orderIds = await asyncExecuter.ToListAsync(
            (await repository.GetQueryableAsync())
            .Where(x => x.Products.Any(p => p.PackingPlaceId == arguments.PackingPlaceId))
            .Select(x => x.ExternalId), cancellationToken);

        context.Data.OrderIds = orderIds;
    }
}