using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Current;

public class ContractorConfigurationProvider : IContractorConfigurationProvider, ITransientDependency
{
    protected readonly IContractorResolver Resolver;
    protected readonly IContractorStore Store;

    public ContractorConfigurationProvider(
        IContractorResolver resolver,
        IContractorStore store)
    {
        Resolver = resolver;
        Store = store;
    }

    public async Task<ContractorConfiguration?> GetAsync()
    {
        var contractorId = await Resolver.ResolveContractorIdAsync();

        if (contractorId is null)
        {
            return null;
        }

        var contractor = await Store.FindAsync(contractorId.Value);

        if (contractor is null)
        {
            throw new BusinessException("Kometa.MultiContractor:001", "Contractor not found!");
        }

        if (!contractor.IsActive)
        {
            throw new BusinessException("Kometa.MultiContractor:002", "Contractor not active!");
        }

        return contractor;
    }
}