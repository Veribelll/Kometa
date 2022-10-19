using Kometa.MultiContractor;
using Kometa.MultiContractor.Current;
using Smde.Identity;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Threading;
using Volo.Abp.Uow;

namespace Smde.Contractors;

public class ContractorStore : IContractorStore, ITransientDependency
{
    protected readonly IRepository<Contractor, Guid> Repository;
    protected readonly ISmdeIdentityUserRepository IdentityUserRepository;
    protected readonly ICurrentTenant CurrentTenant;
    protected readonly IDataFilter DataFilter;
    protected readonly IAsyncQueryableExecuter AsyncExecuter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public ContractorStore(
        IRepository<Contractor, Guid> repository,
        ISmdeIdentityUserRepository identityUserRepository,
        ICurrentTenant currentTenant,
        IDataFilter dataFilter,
        IAsyncQueryableExecuter asyncExecuter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        IdentityUserRepository = identityUserRepository;
        CurrentTenant = currentTenant;
        DataFilter = dataFilter;
        AsyncExecuter = asyncExecuter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    [UnitOfWork]
    public virtual async Task<ContractorConfiguration?> FindAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            var query = (await Repository.GetQueryableAsync())
                .Where(x => x.Id == id)
                .Select(x => new { x.Id, x.Name });

            var contractor = await AsyncExecuter.FirstOrDefaultAsync(query, cancellationToken);

            return contractor is not null ? new ContractorConfiguration(contractor.Id, contractor.Name) : null;
        }
    }

    [UnitOfWork]
    public virtual async Task<List<ContractorConfiguration>> FindByIds(ICollection<Guid> ids)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            var query = (await Repository.GetQueryableAsync())
                .Where(x => ids.Contains(x.Id))
                .Select(x => new { x.Id, x.Name });

            var contractors = await AsyncExecuter.ToListAsync(query, cancellationToken);

            return contractors.Select(x => new ContractorConfiguration(x.Id, x.Name)).ToList();
        }
    }

    [UnitOfWork]
    public virtual async Task<ContractorConfiguration> GetHostAsync(Guid? tenantId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (CurrentTenant.Change(tenantId))
        {
            var query = (await Repository.GetQueryableAsync())
                .Where(x => x.IsHost)
                .Select(x => new { x.Id, x.Name });

            var contractor = await AsyncExecuter.FirstOrDefaultAsync(query, cancellationToken);

            return new ContractorConfiguration(contractor.Id, contractor.Name);
        }
    }

    [UnitOfWork]
    public virtual async Task<List<ContractorConfiguration>> GetAvailableContractorsAsync(Guid identityUserId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            var user = await IdentityUserRepository.FindAsync(x => x.Id == identityUserId, true, cancellationToken);

            if (user is not null)
            {
                var contractorIds = user.GetContractorIds();
                return await FindByIds(contractorIds.ToList());
            }
        }

        return new List<ContractorConfiguration>();
    }
}