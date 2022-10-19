using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Sizes;

public class UpdateSizeInput: SizeCreateOrUpdateInputBase
{
    [Required]
    [ID(nameof(Size))]
    public Guid Id { get; set; }
}