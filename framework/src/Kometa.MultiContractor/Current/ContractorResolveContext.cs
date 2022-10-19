namespace Kometa.MultiContractor.Current;

public class ContractorResolveContext : IContractorResolveContext
{
    public IServiceProvider ServiceProvider { get; }
    public Guid? ContractorId { get; set; }

    public ContractorResolveContext(IServiceProvider serviceProvider)
    {
        ServiceProvider = serviceProvider;
    }
}