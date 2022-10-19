using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.Notification.Sms.Accounts;

public class SmsCenterAccountService : GraphqlService, ISmsCenterAccountService
{
    protected readonly IRepository<SmsCenterAccount, Guid> Repository;
    protected readonly SmsCenterAccountManager Manager;

    public SmsCenterAccountService(
        IRepository<SmsCenterAccount, Guid> repository,
        SmsCenterAccountManager manager)
    {
        Repository = repository;
        Manager = manager;
    }

    public async Task<SmsCenterAccount> CreateAsync(CreateSmsCenterAccountInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var account = await Manager.CreateAsync(
            input.Login,
            input.Password,
            input.Name,
            input.Sender);

        await Repository.InsertAsync(account, true, cancellationToken);

        return account;
    }

    public async Task<SmsCenterAccount> UpdateAsync(UpdateSmsCenterAccountInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var account = await Repository.GetAsync(input.Id, true, cancellationToken);

        await Manager.SetNameAsync(account, input.Name);
        account.SetLogin(input.Login);
        account.SetSender(input.Sender);

        await Repository.UpdateAsync(account, true, cancellationToken);

        return account;
    }

    public async Task<SmsCenterAccount> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var account = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(account, true, cancellationToken);
        return account;
    }
}