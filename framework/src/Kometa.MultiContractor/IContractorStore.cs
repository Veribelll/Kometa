namespace Kometa.MultiContractor;

public interface IContractorStore
{
    Task<ContractorConfiguration?> FindAsync(Guid id);
    Task<List<ContractorConfiguration>> FindByIds(ICollection<Guid> ids);
    Task<ContractorConfiguration> GetHostAsync(Guid? tenantId);
    Task<List<ContractorConfiguration>> GetAvailableContractorsAsync(Guid identityUserId);
}