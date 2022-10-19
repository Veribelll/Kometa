using System.ComponentModel.DataAnnotations;
using static Smde.Contractors.ContractorConstants;

namespace Smde.Contractors;

/// <summary>
/// Контрагент
/// </summary>
public abstract class ContractorCreateOrUpdateInputBase
{
    /// <summary>
    /// Реквизиты банковского счета
    /// </summary>
    [Required]
    public AccountBankInput AccountBank { get; set; } = default!;

    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    /// <summary>
    /// ИНН - Индивидуальный номер налогоплательщика
    /// </summary>
    public abstract string Inn { get; set; }

    /// <summary>
    /// Код ОКПО - Код в Общероссийском классификаторе предприятий и организаций
    /// </summary>
    public abstract string? Okpo { get; set; }

    /// <summary>
    /// Адрес
    /// </summary>
    [Required]
    [StringLength(MaxAddressLenght)]
    public string Address { get; set; } = default!;

    /// <summary>
    /// Фактический адрес
    /// </summary>
    [StringLength(MaxAddressLenght)]
    public string? ActualAddress { get; set; }

    /// <summary>
    /// Почтовый адрес
    /// </summary>
    [StringLength(MaxAddressLenght)]
    public string? MailingAddress { get; set; }
}