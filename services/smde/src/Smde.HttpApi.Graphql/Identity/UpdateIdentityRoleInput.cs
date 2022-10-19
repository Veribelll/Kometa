using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Identity;

namespace Smde.Identity;

public class UpdateIdentityRoleInput : CreateOrUpdateIdentityRoleInputBase, IHasConcurrencyStamp
{
    [Required]
    [ID(nameof(IdentityRole))] 
    public Guid Id { get; set; }
        
    [Required]
    public string ConcurrencyStamp { get; set; } = default!;
}