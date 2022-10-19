using Volo.Abp;

namespace Smde.Contractors;

public class ContractorInnAlreadyExistsException: BusinessException
{
    public string Inn { get; }

    public ContractorInnAlreadyExistsException(string inn): base("Error:Contractor:002")
    {
        Inn = inn;
    }
}