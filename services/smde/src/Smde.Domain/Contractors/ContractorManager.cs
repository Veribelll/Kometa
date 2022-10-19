using Kometa.MultiContractor.Current;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Contractors;

public abstract class ContractorManager : DomainService
{
    private readonly IRepository<Contractor, Guid> _repository;
    protected readonly IDataFilter DataFilter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    protected ContractorManager(
        IRepository<Contractor, Guid> repositoryContractor,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        _repository = repositoryContractor;
        DataFilter = dataFilter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task SetNameAsync(Contractor contractor, string name)
    {
        if (contractor.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        contractor.SetName(name);
    }

    public async Task SetInnAsync(Contractor contractor, string inn)
    {
        if (contractor.Inn == inn)
        {
            return;
        }

        await CheckInnAsync(inn);
        contractor.SetInn(inn);
    }

    protected async Task<bool> GetIsHostAsync()
    {
        using (DataFilter.Disable<IMultiContractor>())
        {
            return !await _repository.AnyAsync();
        }
    }

    protected async Task CheckNameAsync(string name)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await _repository.AnyAsync(x => x.Name == name, cancellationToken))
            {
                throw new ContractorNameAlreadyExistsException(name);
            }
        }
    }

    protected async Task CheckInnAsync(string inn)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await _repository.AnyAsync(x => x.Inn == inn, cancellationToken))
            {
                throw new ContractorInnAlreadyExistsException(inn);
            }
        }
    }
}