using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Orders;

namespace Smde.LastMiles;

public class UpdateLastMileStoragePeriodInput
{
    [Required] 
    [ID(nameof(LastMile))] 
    public Guid LastMileId { get; set; }

    [Required] 
    public TypeOrder TypeOrder { get; set; } = default!;
        
    [Required]
    [Range(0, int.MaxValue)]
    public int Period { get; set; }
}