using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats.Cells;

public class UpdateCellInput : CreateOrUpdateCellInputBase
{
    [Required]
    [ID(nameof(Cell))]
    public Guid CellId { get; set; }
        
    [StringLength(CellConstants.MaxPinCodeLenght)]
    public string? PinCode { get; set; }

    [StringLength(CellConstants.MaxServicePinCodeLenght)]
    public string? ServicePinCode { get; set; }
}