using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Current;

public interface IContractorResolveContext : IServiceProviderAccessor
{
    Guid? ContractorId { get; set; }
}