namespace Kometa.MultiContractor.Current;

public class BasicContractorInfo
{
    public Guid? ContractorId { get; set; }

    public string? Name { get; set; }

    public BasicContractorInfo(Guid? contractorId, string? name = null)
    {
        ContractorId = contractorId;
        Name = name;
    }
}