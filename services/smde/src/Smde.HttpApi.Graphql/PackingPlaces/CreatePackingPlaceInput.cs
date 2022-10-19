using System.ComponentModel.DataAnnotations;
using Smde.Orders;

namespace Smde.PackingPlaces;

public class CreatePackingPlaceInput : PackingPlaceCreateOrUpdateBase
{
    [Required] 
    public TypeOrder TypeOrder { get; set; } = default!;
}