using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace Smde.Contractors.IndividualEntrepreneurs;

public class IndividualEntrepreneurService : GraphqlService, IIndividualEntrepreneurService
{
    protected readonly IRepository<IndividualEntrepreneur, Guid> Repository;
    protected readonly IndividualEntrepreneurManager Manager;
    protected readonly IDistributedEventBus DistributedEventBus;

    public IndividualEntrepreneurService(
        IRepository<IndividualEntrepreneur, Guid> repository,
        IndividualEntrepreneurManager manager,
        IDistributedEventBus distributedEventBus)
    {
        Repository = repository;
        Manager = manager;
        DistributedEventBus = distributedEventBus;
    }

    public async Task<IndividualEntrepreneur> CreateAsync(CreateIndividualEntrepreneurInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var accountBankDto = input.AccountBank;
        var accountBank = new AccountBank(
            accountBankDto.BankName,
            accountBankDto.Bic,
            accountBankDto.PaymentAccount,
            accountBankDto.CorrespondentAccount);

        var individualEntrepreneur = await Manager.CreateAsync(
            accountBank,
            input.Name,
            input.Inn,
            input.Address,
            input.Okpo,
            input.Ogrnip,
            input.ActualAddress,
            input.MailingAddress);

        await Repository.InsertAsync(individualEntrepreneur, true, cancellationToken);

        return individualEntrepreneur;
    }

    public async Task<IndividualEntrepreneur> UpdateAsync(UpdateIndividualEntrepreneurInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var individualEntrepreneur = await Repository.GetAsync(input.Id, true, cancellationToken);

        var accountBankDto = input.AccountBank;
        var accountBank = new AccountBank(
            accountBankDto.BankName,
            accountBankDto.Bic,
            accountBankDto.PaymentAccount,
            accountBankDto.CorrespondentAccount);

        individualEntrepreneur.AccountBank = accountBank;
        await Manager.SetNameAsync(individualEntrepreneur, input.Name);
        await Manager.SetInnAsync(individualEntrepreneur, input.Inn);
        individualEntrepreneur.SetOkpo(input.Okpo);
        individualEntrepreneur.SetOgrnip(input.Ogrnip);
        individualEntrepreneur.SetAddress(input.Address);
        individualEntrepreneur.SetActualAddress(input.ActualAddress);
        individualEntrepreneur.SetMailingAddress(input.MailingAddress);

        await Repository.UpdateAsync(individualEntrepreneur, true, cancellationToken);

        return individualEntrepreneur;
    }

    public async Task<IndividualEntrepreneur> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var individualEntrepreneur = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(individualEntrepreneur, true, cancellationToken);
        return individualEntrepreneur;
    }
}