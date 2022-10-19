using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Available;

public class AvailableContractors : IAvailableContractors, ITransientDependency
{
    protected readonly IAvailableContractorsAccessor AvailableContractorsAccessor;

    public List<Guid> Ids => AvailableContractorsAccessor.Ids;

    public AvailableContractors(IAvailableContractorsAccessor availableContractorsAccessor)
    {
        AvailableContractorsAccessor = availableContractorsAccessor;
    }

    public IDisposable Change(List<ContractorConfiguration> contractors)
    {
        var parentScope = AvailableContractorsAccessor.Ids;
        AvailableContractorsAccessor.Ids = contractors.Select(x => x.Id).ToList();

        return new DisposeAction(() =>
        {
            AvailableContractorsAccessor.Ids = parentScope;
        });
    }
}