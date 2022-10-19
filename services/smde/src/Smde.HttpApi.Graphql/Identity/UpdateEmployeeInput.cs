using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;

namespace Smde.Identity;

public class UpdateEmployeeInput : CreateOrUpdateEmployeeInputBase
{
    [Required] 
    [ID(nameof(IdentityUser))] 
    public Guid Id { get; set; }
}