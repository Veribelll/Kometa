using System.ComponentModel.DataAnnotations;
using static Smde.Orders.CustomerConstants;

namespace Smde.Emex.Orders;

/// <summary>
/// Клиент Emex
/// </summary>
public class EmexCustomerInput
{
    /// <summary>
    /// ФИО
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    /// <summary>
    /// Телефон
    /// </summary>
    [Required]
    [StringLength(MaxPhoneLenght, MinimumLength = MinPhoneLenght)]
    public string Phone { get; set; } = default!;

    /// <summary>
    /// Внешний ID
    /// </summary>
    [Required]
    [StringLength(MaxExternalIdLenght)]
    public string ExternalId { get; set; } = default!;

    /// <summary>
    /// Email
    /// </summary>
    [EmailAddress]
    [StringLength(MaxEmailLenght)]
    public string? Email { get; set; }
}