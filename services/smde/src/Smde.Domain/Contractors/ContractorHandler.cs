using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace Smde.Contractors;

internal class ContractorHandler :
    ILocalEventHandler<EntityDeletedEventData<Contractor>>,
    ITransientDependency
{
    public Task HandleEventAsync(EntityDeletedEventData<Contractor> eventData)
    {
        var contractor = eventData.Entity;
        
        if (contractor.IsHost)
        {
            throw new ContractorHostDeletionException();
        }
        
        return Task.CompletedTask;
    }
}