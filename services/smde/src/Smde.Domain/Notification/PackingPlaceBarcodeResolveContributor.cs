using Microsoft.Extensions.DependencyInjection;
using Smde.PackingPlaces;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.Threading;

namespace Smde.Notification;

internal class PackingPlaceBarcodeResolveContributor : INotificationDataResolveContributor
{
    public async Task ResolveAsync(
        INotificationDataResolveContext context,
        NotificationDataResolveArguments arguments)
    {
        var services = context.ServiceProvider;
        var repository = services.GetRequiredService<IRepository<PackingPlace, Guid>>();
        var cancellationToken = services.GetRequiredService<ICancellationTokenProvider>().Token;
        var asyncExecuter = services.GetRequiredService<IAsyncQueryableExecuter>();
        var barcode = await asyncExecuter.FirstOrDefaultAsync(
            (await repository.GetQueryableAsync())
            .Where(x => x.Id == arguments.PackingPlaceId)
            .Select(x => x.Barcode), cancellationToken);

        context.Data.PackingPlaceBarcode = barcode;
    }
}