using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;
using static Smde.PackingPlaces.ShipmentRequests.ShipmentRequestConstants;

namespace Smde.PackingPlaces.ShipmentRequests;

public abstract class CreateOrUpdateShipmentRequestInputBase
{
    [Required] 
    [ID(nameof(IdentityUser))]
    public Guid CourierId { get; set; }

    /// <summary>
    /// Комментарий для курьера
    /// </summary>
    [StringLength(MaxCommentLenght)]
    public string? Comment { get; set; }
}