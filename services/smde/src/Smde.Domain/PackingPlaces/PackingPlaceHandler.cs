using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace Smde.PackingPlaces;

internal class PackingPlaceHandler :
    ILocalEventHandler<EntityDeletedEventData<PackingPlace>>,
    ITransientDependency
{
    public Task HandleEventAsync(EntityDeletedEventData<PackingPlace> eventData)
    {
        var packingPlace = eventData.Entity;

        if (packingPlace.IsLocked)
        {
            throw new PackingPlaceLockedException(packingPlace.Id);
        }
        
        return Task.CompletedTask;
    }
}