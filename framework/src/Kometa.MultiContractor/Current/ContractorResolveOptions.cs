namespace Kometa.MultiContractor.Current;

public class ContractorResolveOptions
{
    public List<IContractorResolveContributor> Resolvers { get; } = new();
}