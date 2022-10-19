using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Available;

public class AvailableContractorsConfigurationProvider : IAvailableContractorsConfigurationProvider, ITransientDependency
{
    public readonly IAvailableContractorsResolver Resolver;
    public readonly IContractorStore Store;

    public AvailableContractorsConfigurationProvider(
        IAvailableContractorsResolver resolver,
        IContractorStore store)
    {
        Resolver = resolver;
        Store = store;
    }

    public async Task<List<ContractorConfiguration>> GetAsync()
    {
        var contractorIds = await Resolver.ResolveAvailableContractorIdsAsync();

        var contractors = await Store.FindByIds(contractorIds);

        if (contractors is null)
        {
            throw new BusinessException("Kometa.MultiContractor:003", "Available Contractors not found!");
        }

        return contractors.ToList();
    }
}