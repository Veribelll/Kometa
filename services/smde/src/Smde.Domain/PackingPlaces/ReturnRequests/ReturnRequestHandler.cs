using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace Smde.PackingPlaces.ReturnRequests;

internal class ReturnRequestHandler :
    ILocalEventHandler<EntityDeletedEventData<ReturnRequest>>,
    ITransientDependency
{
    public Task HandleEventAsync(EntityDeletedEventData<ReturnRequest> eventData)
    {
        var request = eventData.Entity;

        if (request.IsLocked)
        {
            throw new ReturnRequestLockedException(request.Id);
        }

        return Task.CompletedTask;
    }
}