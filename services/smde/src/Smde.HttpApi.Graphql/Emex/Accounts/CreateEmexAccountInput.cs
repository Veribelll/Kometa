using System.ComponentModel.DataAnnotations;
using static Smde.Emex.Accounts.EmexAccountConstants;

namespace Smde.Emex.Accounts;

public class CreateEmexAccountInput: CreateOrUpdateEmexAccountInputBase
{
    [Required]
    [StringLength(MaxPasswordLenght)]
    public string Password { get; set; } = default!;
}

