using System.ComponentModel.DataAnnotations;

namespace Smde.Emex.Orders;

public class CreateEmexOrderInput : CreateOrUpdateEmexOrderInputBase
{
    /// <summary>
    /// Товары
    /// </summary>
    [Required]
    [MinLength(1)]
    public ICollection<EmexProductInput> Products { get; set; } = default!;
}