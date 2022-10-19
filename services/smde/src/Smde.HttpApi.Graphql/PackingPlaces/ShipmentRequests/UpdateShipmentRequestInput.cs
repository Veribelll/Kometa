using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.PackingPlaces.ShipmentRequests;

public class UpdateShipmentRequestInput: CreateOrUpdateShipmentRequestInputBase
{
    [Required]
    [ID(nameof(ShipmentRequest))]
    public Guid Id { get; set; }   
}