using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats.Topology;

public class UpdatePostamatDisplayInput
{
    [ID(nameof(LastMile))]
    public Guid PostamatId { get; set; }

    [Required] 
    [MinLength(1)]
    public ICollection<CellDisplayInput> CellDisplays { get; set; } = default!;
}