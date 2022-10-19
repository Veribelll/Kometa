using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.PackingPlaces;
using static Smde.Emex.Orders.EmexProductConstants;

namespace Smde.Emex.Orders;

public class EmexProductInput
{
    [Required]
    [ID(nameof(PackingPlace))]
    public Guid PackingPlaceId { get; set; }
    
    /// <summary>
    /// Тип баланса
    /// </summary>
    [Required]
    public EmexTypeBalance TypeBalance { get; set; }

    /// <summary>
    /// Тип оплаты
    /// </summary>
    [Required]
    public EmexTypePayment TypePayment { get; set; }

    /// <summary>
    /// Штрих код
    /// </summary>
    [StringLength(MaxBarcodeLenght)]
    public string? Barcode { get; set; }

    /// <summary>
    /// Название
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    /// <summary>
    /// Артикул
    /// </summary>
    [Required]
    [StringLength(MaxVendorCodeLenght)]
    public string VendorCode { get; set; } = default!;

    /// <summary>
    /// Производитель
    /// </summary>
    [Required]
    [StringLength(MaxManufacturerLenght)]
    public string Manufacturer { get; set; } = default!;

    /// <summary>
    /// Кол-во
    /// </summary>
    [Required]
    [Range(0, double.MaxValue)]
    public decimal Quantity { get; set; }

    /// <summary>
    /// Цена 
    /// </summary>
    [Range(0, double.MaxValue)]
    public decimal Price { get; set; }

    /// <summary>
    /// Ставка НДС
    /// </summary>
    [Range(0, double.MaxValue)]
    public decimal Vat { get; set; }

    /// <summary>
    /// Сумма
    /// </summary>
    [Range(0, double.MaxValue)]
    public decimal Sum { get; set; }

    /// <summary>
    /// Страна производитель
    /// </summary>
    [StringLength(MaxManufacturerCountryLenght)]
    public string? ManufacturerCountry { get; set; }

    /// <summary>
    /// Код страны производителя
    /// </summary>
    [StringLength(MaxManufacturerCountryCodeLenght)]
    public string? ManufacturerCountryCode { get; set; }

    /// <summary>
    /// Маркировка
    /// </summary>
    [StringLength(MaxMarkingLenght)]
    public string? Marking { get; set; }

    /// <summary>
    /// Грузотаможенная декларация
    /// </summary>
    [StringLength(MaxGtdLenght)]
    public string? Gtd { get; set; }
}