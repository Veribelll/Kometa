using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace Smde.Contractors.Companies;

public class CompanyService : GraphqlService, ICompanyService
{
    protected readonly IRepository<Company, Guid> Repository;
    protected readonly CompanyManager Manager;
    protected readonly IDistributedEventBus DistributedEventBus;

    public CompanyService(
        IRepository<Company, Guid> repository,
        CompanyManager manager,
        IDistributedEventBus distributedEventBus)
    {
        Repository = repository;
        Manager = manager;
        DistributedEventBus = distributedEventBus;
    }

    public async Task<Company> CreateAsync(CreateCompanyInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var accountBankDto = input.AccountBank;
        var accountBank = new AccountBank(
            accountBankDto.BankName,
            accountBankDto.Bic,
            accountBankDto.PaymentAccount,
            accountBankDto.CorrespondentAccount);

        var company = await Manager.CreateAsync(
            accountBank,
            input.Name,
            input.Inn,
            input.Address,
            input.Okpo,
            input.Kpp,
            input.Ogrn,
            input.ActualAddress,
            input.MailingAddress);

        await Repository.InsertAsync(company, true, cancellationToken);

        return company;
    }

    public async Task<Company> UpdateAsync(UpdateCompanyInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var company = await Repository.GetAsync(input.Id, true, cancellationToken);

        var accountBankDto = input.AccountBank;
        var accountBank = new AccountBank(
            accountBankDto.BankName,
            accountBankDto.Bic,
            accountBankDto.PaymentAccount,
            accountBankDto.CorrespondentAccount);

        company.AccountBank = accountBank;
        await Manager.SetNameAsync(company, input.Name);
        await Manager.SetInnAsync(company, input.Inn);
        company.SetOkpo(input.Okpo);
        company.SetKpp(input.Kpp);
        company.SetOgrn(input.Ogrn);
        company.SetAddress(input.Address);
        company.SetActualAddress(input.ActualAddress);
        company.SetMailingAddress(input.MailingAddress);

        await Repository.UpdateAsync(company, true, cancellationToken);

        return company;
    }

    public async Task<Company> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var company = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(company, true, cancellationToken);
        return company;
    }
}