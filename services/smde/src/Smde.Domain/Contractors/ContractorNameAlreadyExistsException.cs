using Volo.Abp;

namespace Smde.Contractors;

public class ContractorNameAlreadyExistsException: BusinessException
{
    public string Name { get; }

    public ContractorNameAlreadyExistsException(string name): base("Error:Contractor:001")
    {
        Name = name;
    }
}