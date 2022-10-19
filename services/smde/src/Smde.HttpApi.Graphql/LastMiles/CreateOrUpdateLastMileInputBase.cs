using System.ComponentModel.DataAnnotations;
using static Smde.LastMiles.LastMileConstants;

namespace Smde.LastMiles;

public abstract class CreateOrUpdateLastMileInputBase
{
    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    /// <summary>
    /// Адрес
    /// </summary>
    [Required]
    [StringLength(MaxAddressLenght)]
    public string Address { get; set; } = default!;

    /// <summary>
    /// Заводской номер
    /// </summary>
    [Required]
    [StringLength(MaxFactoryNumberLenght)]
    public string FactoryNumber { get; set; } = default!;

    /// <summary>
    /// Внешний ID
    /// </summary>
    [Required]
    [StringLength(MaxExternalIdLenght)]
    public string ExternalId { get; set; } = default!;
}