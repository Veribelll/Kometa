using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.LastMiles;
using Smde.Sizes;
using Volo.Abp.Identity;
using static Smde.PackingPlaces.PackingPlaceConstants;

#pragma warning disable CS8618

namespace Smde.PackingPlaces;

public abstract class PackingPlaceCreateOrUpdateBase
{
    [Required]
    [StringLength(MaxBarcodeLenght)]
    public string Barcode { get; set; }
    
    [ID(nameof(LastMile))]
    public Guid? LastMileId { get; set; }

    [ID(nameof(IdentityUser))] 
    public Guid? CourierId { get; set; }
    
    [ID(nameof(Size))]
    public Guid? SizeId { get; set; }
}