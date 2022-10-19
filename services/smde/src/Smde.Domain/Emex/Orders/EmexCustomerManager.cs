using Kometa.MultiContractor.Current;
using Smde.Orders;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Threading;

namespace Smde.Emex.Orders;

public class EmexCustomerManager : CustomerManager<EmexCustomer>
{
    public EmexCustomerManager(
        IRepository<EmexCustomer, Guid> repository,
        ICurrentContractor currentContractor,
        ICancellationTokenProvider cancellationTokenProvider)
        : base(repository, currentContractor, cancellationTokenProvider)
    {
    }

    public async Task<EmexCustomer> CreateOrUpdateAsync(
        string name,
        string phone,
        string externalId,
        string? email = null)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var customer = await Repository.FindAsync(x => x.ExternalId == externalId, true, cancellationToken);

        if (customer is null)
        {
            customer = await CreateAsync(name, phone, externalId, email);
            await Repository.InsertAsync(customer, true, cancellationToken);
            return customer;
        }

        customer.SetName(name);
        customer.SetPhone(phone);
        customer.SetEmail(email);

        await Repository.UpdateAsync(customer, true, cancellationToken);

        return customer;
    }

    public async Task<EmexCustomer> CreateAsync(
        string name,
        string phone,
        string externalId,
        string? email = null)
    {
        await CheckExternalIdAsync(externalId);

        return new EmexCustomer(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            name,
            phone,
            externalId,
            email);
    }
}