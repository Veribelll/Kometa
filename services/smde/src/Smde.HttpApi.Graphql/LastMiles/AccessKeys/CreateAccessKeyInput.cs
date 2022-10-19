using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;

namespace Smde.LastMiles.AccessKeys;

public class CreateAccessKeyInput : CreateOrUpdateAccessKeyInputBase
{
    [Required] 
    [ID(nameof(IdentityUser))] 
    public Guid IdentityUserId { get; set; }
}