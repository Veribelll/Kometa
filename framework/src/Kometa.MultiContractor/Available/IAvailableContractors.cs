namespace Kometa.MultiContractor.Available;

public interface IAvailableContractors
{
    List<Guid> Ids { get; }
    IDisposable Change(List<ContractorConfiguration> contractors);
}