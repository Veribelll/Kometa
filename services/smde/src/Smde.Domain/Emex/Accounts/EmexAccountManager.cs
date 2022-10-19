using Kometa.MultiContractor.Current;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Emex.Accounts;

public class EmexAccountManager : DomainService
{
    protected readonly IRepository<EmexAccount, Guid> Repository;
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly IDataFilter DataFilter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public EmexAccountManager(
        IRepository<EmexAccount, Guid> repository,
        ICurrentContractor currentContractor,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CurrentContractor = currentContractor;
        DataFilter = dataFilter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<EmexAccount> CreateAsync(
        string name,
        long userId,
        string password)
    {
        await CheckNameAsync(name);
        await CheckUserIdAsync(userId);

        return new EmexAccount(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            name,
            userId,
            password);
    }

    public async Task SetNameAsync(EmexAccount account, string name)
    {
        if (account.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        account.SetName(name);
    }

    public async Task SetUserIdAsync(EmexAccount account, long userId)
    {
        if (account.UserId == userId)
        {
            return;
        }

        await CheckUserIdAsync(userId);
        account.UserId = userId;
    }

    private async Task CheckNameAsync(string name)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await Repository.AnyAsync(x => x.Name == name, cancellationToken))
            {
                throw new EmexAccountNameAlreadyExistsException(name);
            }
        }
    }

    private async Task CheckUserIdAsync(long userId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await Repository.AnyAsync(x => x.UserId == userId, cancellationToken))
            {
                throw new EmexAccountUserIdAlreadyExistsException(userId);
            }
        }
    }
}