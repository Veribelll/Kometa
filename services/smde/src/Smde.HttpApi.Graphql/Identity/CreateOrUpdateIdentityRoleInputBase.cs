using System.ComponentModel.DataAnnotations;

namespace Smde.Identity;

public class CreateOrUpdateIdentityRoleInputBase
{
    [Required]
    [StringLength(256)]
    public string Name { get; set; } = default!;

    [Required]
    public bool IsDefault { get; set; }

    [Required]
    public bool IsPublic { get; set; }
}