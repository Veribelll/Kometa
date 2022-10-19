using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Current;

public class CurrentContractor : ICurrentContractor, ITransientDependency
{
    protected readonly ICurrentContractorAccessor CurrentContractorAccessor;

    public Guid? Id => CurrentContractorAccessor.Current?.ContractorId;

    public string? Name => CurrentContractorAccessor.Current?.Name;

    public CurrentContractor(ICurrentContractorAccessor currentContractorAccessor)
    {
        CurrentContractorAccessor = currentContractorAccessor;
    }

    public IDisposable Change(Guid? id, string? name = null)
    {
        var parentScope = CurrentContractorAccessor.Current;
        CurrentContractorAccessor.Current = new BasicContractorInfo(id, name);

        return new DisposeAction(() =>
        {
            CurrentContractorAccessor.Current = parentScope;
        });
    }
}