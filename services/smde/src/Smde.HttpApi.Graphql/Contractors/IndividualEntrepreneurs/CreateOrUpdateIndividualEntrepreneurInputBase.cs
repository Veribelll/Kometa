using System.ComponentModel.DataAnnotations;
using Kometa.Validation;
using static Smde.Contractors.IndividualEntrepreneurConstants;

namespace Smde.Contractors.IndividualEntrepreneurs;

/// <summary>
/// Индивидуальный предприниматель
/// </summary>
public abstract class CreateOrUpdateIndividualEntrepreneurInputBase : ContractorCreateOrUpdateInputBase
{
    /// <inheritdoc />
    [Required]
    [LenghtFix(InnLenght)]
    public override string Inn { get; set; } = default!;

    /// <inheritdoc />
    [LenghtFix(OkpoLenght)]
    public override string? Okpo { get; set; }

    /// <summary>
    /// ОГРНИП - Основной государственный регистрационный номер индивидуального предпринимателя
    /// </summary>
    [LenghtFix(OgrnipLenght)]
    public string? Ogrnip { get; set; }
}