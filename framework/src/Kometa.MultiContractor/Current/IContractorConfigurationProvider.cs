namespace Kometa.MultiContractor.Current;

public interface IContractorConfigurationProvider
{
    Task<ContractorConfiguration?> GetAsync();
}