using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats;

public class UpdatePostamatInput : CreateOrUpdatePostamatInputBase
{
    [Required]
    [ID(nameof(LastMile))]
    public Guid Id { get; set; }
}