using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Emex.Orders;

public class EmexOrderManager : DomainService
{
    protected readonly IRepository<EmexOrder, Guid> Repository;
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public EmexOrderManager(
        IRepository<EmexOrder, Guid> repository,
        ICurrentContractor currentContractor,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CurrentContractor = currentContractor;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<EmexOrder> CreateAsync(
        Guid customerId,
        long globalId,
        string externalId)
    {
        await CheckExternalIdAsync(externalId);

        return new EmexOrder(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            customerId,
            globalId,
            externalId);
    }

    public async Task SetExternalIdAsync(EmexOrder order, string externalId)
    {
        if (order.ExternalId == externalId)
        {
            return;
        }

        await CheckExternalIdAsync(externalId);
        order.SetExternalId(externalId);
    }

    private async Task CheckExternalIdAsync(string externalId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (await Repository.AnyAsync(x => x.ExternalId == externalId, cancellationToken))
        {
            throw new EmexOrderExternalIdAlreadyExistsException(externalId);
        }
    }
}