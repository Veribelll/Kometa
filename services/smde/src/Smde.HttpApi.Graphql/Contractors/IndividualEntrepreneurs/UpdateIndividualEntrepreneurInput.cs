using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Contractors.IndividualEntrepreneurs;

/// <summary>
/// Индивидуальный предприниматель
/// </summary>
public class UpdateIndividualEntrepreneurInput: CreateOrUpdateIndividualEntrepreneurInputBase
{
    [Required]
    [ID(nameof(Contractor))] 
    public Guid Id { get; set; }
}