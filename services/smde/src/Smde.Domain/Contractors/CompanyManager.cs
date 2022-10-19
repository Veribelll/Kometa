using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Threading;

namespace Smde.Contractors;

public class CompanyManager : ContractorManager
{
    protected readonly IRepository<Company, Guid> Repository;

    public CompanyManager(
        IRepository<Company, Guid> repository,
        IRepository<Contractor, Guid> repositoryContractor,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider) 
        : base(repositoryContractor, dataFilter, cancellationTokenProvider)
    {
        Repository = repository;
    }

    public async Task<Company> CreateAsync(
        AccountBank accountBank,
        string name,
        string inn,
        string address,
        string? okpo = null,
        string? kpp = null,
        string? ogrn = null,
        string? actualAddress = null,
        string? mailingAddress = null)
    {
        await CheckNameAsync(name);
        await CheckInnAsync(inn);
            
        return new Company(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            accountBank,
            name,
            inn,
            address,
            okpo,
            kpp,
            ogrn,
            actualAddress,
            mailingAddress,
            await GetIsHostAsync());
    }
}