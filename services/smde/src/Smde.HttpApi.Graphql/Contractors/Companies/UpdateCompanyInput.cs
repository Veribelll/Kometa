using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Contractors.Companies;

/// <summary>
/// Компания
/// </summary>
public class UpdateCompanyInput : CreateOrUpdateCompanyInputBase
{
    [Required]
    [ID(nameof(Contractor))]
    public Guid Id { get; set; }
}