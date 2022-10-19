using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats;

public class ActivatedPostamat
{
    public Guid ContractorId { get; set; }
    public Guid PostamatId { get; set; }
    [ID(nameof(LastMile))]
    public Guid PostamatIdRelay { get; set; }
}