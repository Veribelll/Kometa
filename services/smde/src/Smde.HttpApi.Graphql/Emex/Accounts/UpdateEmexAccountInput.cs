using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Emex.Accounts;

public class UpdateEmexAccountInput: CreateOrUpdateEmexAccountInputBase
{
    [Required]
    [ID(nameof(EmexAccount))]
    public Guid Id { get; set; }
}