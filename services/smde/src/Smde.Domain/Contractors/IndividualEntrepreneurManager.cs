using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Threading;

namespace Smde.Contractors;

public class IndividualEntrepreneurManager : ContractorManager
{
    protected readonly IRepository<IndividualEntrepreneur, Guid> Repository;

    public IndividualEntrepreneurManager(
        IRepository<IndividualEntrepreneur, Guid> repository,
        IRepository<Contractor, Guid> repositoryContractor,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider) 
        : base(repositoryContractor, dataFilter, cancellationTokenProvider)
    {
        Repository = repository;
    }

    public async Task<IndividualEntrepreneur> CreateAsync(
        AccountBank accountBank,
        string name,
        string inn,
        string address,
        string? okpo = null,
        string? ogrnip = null,
        string? actualAddress = null,
        string? mailingAddress = null)
    {
        await CheckNameAsync(name);
        await CheckInnAsync(inn);

        return new IndividualEntrepreneur(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            accountBank,
            name,
            inn,
            address,
            okpo,
            ogrnip,
            actualAddress,
            mailingAddress,
            await GetIsHostAsync());
    }
}