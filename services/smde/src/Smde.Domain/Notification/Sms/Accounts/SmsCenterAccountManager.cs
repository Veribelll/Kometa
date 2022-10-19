using Kometa.MultiContractor.Current;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Threading;

namespace Smde.Notification.Sms.Accounts;

public class SmsCenterAccountManager : SmsAccountManager
{
    protected readonly ICurrentContractor CurrentContractor;

    public SmsCenterAccountManager(
        IRepository<SmsAccount, Guid> repository,
        ICurrentContractor currentContractor,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider)
        : base(repository, dataFilter, cancellationTokenProvider)
    {
        CurrentContractor = currentContractor;
    }

    public async Task<SmsCenterAccount> CreateAsync(
        string login,
        string password,
        string name,
        string sender)
    {
        await CheckNameAsync(name);

        return new SmsCenterAccount(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            login,
            password,
            name,
            sender);
    }
}