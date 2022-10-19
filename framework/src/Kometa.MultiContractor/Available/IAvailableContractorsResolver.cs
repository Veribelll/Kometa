namespace Kometa.MultiContractor.Available;

public interface IAvailableContractorsResolver
{
    Task<List<Guid>> ResolveAvailableContractorIdsAsync();
}