using System.ComponentModel.DataAnnotations;

namespace Smde.LastMiles.Postamats.Cells;

public class CreateCellInput : CreateOrUpdateCellInputBase
{
    [Required]
    public TypeCell TypeCell { get; set; }
}