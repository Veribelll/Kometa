using System.ComponentModel.DataAnnotations;
using static Smde.Sizes.SizeConstants;

namespace Smde.Sizes;

public abstract class SizeCreateOrUpdateInputBase
{
    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;
}