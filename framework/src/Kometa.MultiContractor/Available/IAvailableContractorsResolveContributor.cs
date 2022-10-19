namespace Kometa.MultiContractor.Available;

public interface IAvailableContractorsResolveContributor
{
    Task ResolveAsync(IAvailableContractorsResolveContext context);
}