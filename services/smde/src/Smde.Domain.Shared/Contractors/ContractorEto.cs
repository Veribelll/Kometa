using Volo.Abp.Domain.Entities.Events.Distributed;

namespace Smde.Contractors;

public class ContractorEto: EtoBase
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
}