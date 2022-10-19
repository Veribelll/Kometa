using Kometa.MultiContractor.Current;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Notification.Sms.Accounts;

public abstract class SmsAccountManager : DomainService
{
    protected readonly IDataFilter DataFilter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;
    private readonly IRepository<SmsAccount, Guid> _repository;

    protected SmsAccountManager(
        IRepository<SmsAccount, Guid> repository,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        _repository = repository;
        DataFilter = dataFilter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task SetNameAsync(SmsAccount smsAccount, string name)
    {
        if (smsAccount.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        smsAccount.SetName(name);
    }

    protected async Task CheckNameAsync(string name)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await _repository.AnyAsync(x => x.Name == name, cancellationToken))
            {
                throw new SmsAccountNameAlreadyExistsException(name);
            }
        }
    }
}