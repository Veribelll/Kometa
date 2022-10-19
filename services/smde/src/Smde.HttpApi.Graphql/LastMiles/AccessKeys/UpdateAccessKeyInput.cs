using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.AccessKeys;

public class UpdateAccessKeyInput : CreateOrUpdateAccessKeyInputBase
{
    [Required]
    [ID(nameof(AccessKey))]
    public Guid Id { get; set; }
}