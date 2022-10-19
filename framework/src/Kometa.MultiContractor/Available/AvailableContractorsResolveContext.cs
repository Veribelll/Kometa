namespace Kometa.MultiContractor.Available;

public class AvailableContractorsResolveContext : IAvailableContractorsResolveContext
{
    public IServiceProvider ServiceProvider { get; }
    public List<Guid>? AvailableContractorIds { get; set; }

    public AvailableContractorsResolveContext(IServiceProvider serviceProvider)
    {
        ServiceProvider = serviceProvider;
    }
}