using Volo.Abp;

namespace Smde.Contractors;

public class ContractorHostDeletionException : BusinessException
{
    public ContractorHostDeletionException() : base("Error:Contractor:003")
    {
    }
}