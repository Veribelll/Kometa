using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace Smde.PackingPlaces.ShipmentRequests;

internal class ShipmentRequestHandler : 
    ILocalEventHandler<EntityDeletedEventData<ShipmentRequest>>,
    ITransientDependency
{
    public Task HandleEventAsync(EntityDeletedEventData<ShipmentRequest> eventData)
    {
        var request = eventData.Entity;
        
        if (request.IsLocked)
        {
            throw new ShipmentRequestLockedException(request.Id);
        }
        
        return Task.CompletedTask;
    }
}