using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.LastMiles.Postamats.Cells;
using Smde.Topology.TemplatesCell;

namespace Smde.LastMiles.Postamats.Topology;

public class CellDisplayInput
{
    [ID(nameof(TemplateCell))]
    [Required]
    public Guid TemplateCellId { get; set; }
    
    [ID(nameof(Cell))]
    public Guid? CellId { get; set; }
    
    [Required]
    public int X { get; set; }
    
    [Required]
    public int Y { get; set; }
}