namespace Kometa.MultiContractor.Available;

public interface IAvailableContractorsConfigurationProvider
{
    Task<List<ContractorConfiguration>> GetAsync();
}