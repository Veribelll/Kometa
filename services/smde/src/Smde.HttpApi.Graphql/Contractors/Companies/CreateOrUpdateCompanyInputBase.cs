using System.ComponentModel.DataAnnotations;
using Kometa.Validation;
using static Smde.Contractors.CompanyConstants;

namespace Smde.Contractors.Companies;

/// <summary>
/// Компания
/// </summary>
public abstract class CreateOrUpdateCompanyInputBase : ContractorCreateOrUpdateInputBase
{
    /// <inheritdoc />
    [Required]
    [LenghtFix(InnLenght)]
    public override string Inn { get; set; } = default!;

    /// <inheritdoc />
    [LenghtFix(OkpoLenght)]
    public override string? Okpo { get; set; }

    /// <summary>
    /// КПП - Код причины постановки
    /// </summary>
    [LenghtFix(KppLenght)]
    public string? Kpp { get; set; }

    /// <summary>
    /// ОГРН - Основной государственный регистрационный номер
    /// </summary>
    [LenghtFix(OgrnLenght)]
    public string? Ogrn { get; set; }
}