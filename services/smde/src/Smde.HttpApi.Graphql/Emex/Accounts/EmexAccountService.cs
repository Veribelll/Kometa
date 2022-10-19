using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.Emex.Accounts;

public class EmexAccountService : GraphqlService, IEmexAccountService
{
    protected readonly IRepository<EmexAccount, Guid> Repository;
    protected readonly EmexAccountManager Manager;

    public EmexAccountService(
        IRepository<EmexAccount, Guid> repository,
        EmexAccountManager manager)
    {
        Repository = repository;
        Manager = manager;
    }

    public async Task<EmexAccount> CreateAsync(CreateEmexAccountInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var account = await Manager.CreateAsync(
            input.Name,
            input.UserId,
            input.Password);

        await Repository.InsertAsync(account, true, cancellationToken);

        return account;
    }

    public async Task<EmexAccount> UpdateAsync(UpdateEmexAccountInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var account = await Repository.GetAsync(input.Id, true, cancellationToken);

        await Manager.SetNameAsync(account, input.Name);
        await Manager.SetUserIdAsync(account, input.UserId);

        await Repository.UpdateAsync(account, true, cancellationToken);

        return account;
    }

    public async Task<EmexAccount> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var account = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(account, true, cancellationToken);
        return account;
    }
}