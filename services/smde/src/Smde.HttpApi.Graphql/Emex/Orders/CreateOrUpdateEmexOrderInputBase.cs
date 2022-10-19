using System.ComponentModel.DataAnnotations;

namespace Smde.Emex.Orders;

public abstract class CreateOrUpdateEmexOrderInputBase
{
    /// <summary>
    /// Идентификатор движения Emex 
    /// </summary>
    [Required]
    [Range(0, double.MaxValue)]
    public long GlobalId { get; set; }

    /// <summary>
    /// Внешний ID заказа
    /// </summary>
    [Required]
    public string ExternalId { get; set; } = default!;

    /// <summary>
    /// Клиент
    /// </summary>
    [Required]
    public EmexCustomerInput Customer { get; set; } = default!;
}