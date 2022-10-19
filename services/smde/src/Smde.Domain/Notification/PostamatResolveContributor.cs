using Microsoft.Extensions.DependencyInjection;
using Smde.LastMiles;
using Smde.LastMiles.Postamats;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.Threading;

namespace Smde.Notification;

internal class PostamatResolveContributor : INotificationDataResolveContributor
{
    public async Task ResolveAsync(
        INotificationDataResolveContext context,
        NotificationDataResolveArguments arguments)
    {
        if (arguments.LastMileId is null)
        {
            return;
        }
        
        var services = context.ServiceProvider;
        var cancellationToken = services.GetRequiredService<ICancellationTokenProvider>().Token;
        var repository = services.GetRequiredService<IRepository<Postamat, Guid>>();
        var postamat = await repository.FindAsync(arguments.LastMileId.Value, true, cancellationToken);

        if (postamat is null)
        {
            return;
        }

        context.Data.LastMileAddress = postamat.Address;
        context.Data.PinCode = postamat.Cells.GetPinCode(arguments.PackingPlaceId);
    }
}