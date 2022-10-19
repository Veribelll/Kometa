using System.ComponentModel.DataAnnotations;
using Kometa.Validation;
using static Smde.Contractors.AccountBankConstants;

namespace Smde.Contractors;

/// <summary>
/// Реквизиты банковского счета
/// </summary>
public class AccountBankInput
{
    /// <summary>
    /// Наименование банка
    /// </summary>
    [Required]
    [StringLength(MaxBankNameLenght)]
    public string BankName { get; set; } = default!;

    /// <summary>
    /// БИК - банковский идентификационный код
    /// </summary>
    [Required]
    [LenghtFix(BicLenght)]
    public string Bic { get; set; } = default!;

    /// <summary>
    /// Расчетный счет
    /// </summary>
    [Required]
    [LenghtFix(PaymentAccountLenght)]
    public string PaymentAccount { get; set; } = default!;

    /// <summary>
    /// Корреспондентский счёт
    /// </summary>
    [Required]
    [LenghtFix(CorrespondentAccountLenght)]
    public string CorrespondentAccount { get; set; } = default!;
}