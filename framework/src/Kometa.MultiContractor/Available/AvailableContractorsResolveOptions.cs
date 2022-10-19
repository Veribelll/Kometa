namespace Kometa.MultiContractor.Available;

public class AvailableContractorsResolveOptions
{
    public List<IAvailableContractorsResolveContributor> Resolvers { get; } = new();
}