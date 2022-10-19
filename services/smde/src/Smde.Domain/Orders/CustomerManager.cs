using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Orders;

public abstract class CustomerManager<T> : DomainService
    where T : Customer
{
    protected readonly IRepository<T, Guid> Repository;
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    protected CustomerManager(
        IRepository<T, Guid> repository,
        ICurrentContractor currentContractor,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CurrentContractor = currentContractor;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public virtual async Task SetExternalIdAsync(T customer, string externalId)
    {
        if (customer.ExternalId == externalId)
        {
            return;
        }

        await CheckExternalIdAsync(externalId);

        customer.SetExternalId(externalId);
    }

    protected virtual async Task CheckExternalIdAsync(string externalId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (await Repository.AnyAsync(x => x.ExternalId == externalId, cancellationToken))
        {
            throw new CustomerExternalIdAlreadyExistsException(externalId);
        }
    }
}