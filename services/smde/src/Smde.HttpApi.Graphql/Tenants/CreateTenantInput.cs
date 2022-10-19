using System.ComponentModel.DataAnnotations;

namespace Smde.Tenants;

public class CreateTenantInput : CreateOrUpdateTenantInputBase
{
    [Required]
    public CreateContractorInput Contractor { get; set; } = default!;
    
    [Required]
    [EmailAddress]
    [MaxLength(256)]
    public string AdminEmailAddress { get; set; } = default!;

    [Required] 
    [MaxLength(128)] 
    public string AdminPassword { get; set; } = default!;
}