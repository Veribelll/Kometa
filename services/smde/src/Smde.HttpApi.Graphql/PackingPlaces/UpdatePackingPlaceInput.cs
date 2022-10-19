using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.PackingPlaces;

public class UpdatePackingPlaceInput : PackingPlaceCreateOrUpdateBase
{
    [Required]
    [ID(nameof(PackingPlace))]
    public Guid Id { get; set; }
}