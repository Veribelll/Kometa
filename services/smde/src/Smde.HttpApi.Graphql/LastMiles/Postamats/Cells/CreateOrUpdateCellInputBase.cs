using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using static Smde.LastMiles.Postamats.Cells.CellConstants;

namespace Smde.LastMiles.Postamats.Cells;

public abstract class CreateOrUpdateCellInputBase
{
    [Required] 
    [ID(nameof(LastMile))]
    public Guid PostamatId { get; set; }
        
    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    /// <summary>
    /// ШК
    /// </summary>
    [Required]
    [StringLength(MaxBarcodeLenght)]
    public string Barcode { get; set; } = default!;
}