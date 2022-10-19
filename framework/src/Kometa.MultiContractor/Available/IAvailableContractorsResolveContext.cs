using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Available;

public interface IAvailableContractorsResolveContext : IServiceProviderAccessor
{
    List<Guid>? AvailableContractorIds { get; set; }
}