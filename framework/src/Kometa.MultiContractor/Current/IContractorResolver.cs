namespace Kometa.MultiContractor.Current;

public interface IContractorResolver
{
    Task<Guid?> ResolveContractorIdAsync();
}