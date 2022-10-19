namespace Kometa.MultiContractor.Current;

public interface IContractorResolveContributor
{
    Task ResolveAsync(IContractorResolveContext context);
}