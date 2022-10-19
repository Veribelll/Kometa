using System.ComponentModel.DataAnnotations;
using static Smde.Emex.Accounts.EmexAccountConstants;

namespace Smde.Emex.Accounts;

public abstract class CreateOrUpdateEmexAccountInputBase
{
    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [MaxLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    [Required]
    [Range(0, double.MaxValue)]
    public long UserId { get; set; }
}