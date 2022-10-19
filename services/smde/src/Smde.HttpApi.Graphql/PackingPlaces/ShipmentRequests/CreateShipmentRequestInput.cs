using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.LastMiles;
using static Smde.PackingPlaces.ShipmentRequests.ShipmentRequestConstants;

namespace Smde.PackingPlaces.ShipmentRequests;

public class CreateShipmentRequestInput : CreateOrUpdateShipmentRequestInputBase
{
    [Required] 
    [ID(nameof(LastMile))]
    public Guid LastMileId { get; set; }

    [Required]
    [MinLength(1)]
    [ID(nameof(PackingPlace))]
    public ICollection<Guid> PackingPlaceIds { get; set; } = default!;

    /// <summary>
    /// Код
    /// </summary>
    [Required]
    [StringLength(MaxCodeLenght)]
    public string Code { get; set; } = default!;

    /// <summary>
    /// Причина
    /// </summary>
    [StringLength(MaxCauseLenght)]
    public string? Cause { get; set; }
}