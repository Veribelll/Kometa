using System.ComponentModel.DataAnnotations;

namespace Smde.Tenants;

public class CreateOrUpdateTenantInputBase
{
    [Required] 
    [StringLength(256)] 
    public string Name { get; set; } = default!;

    [Required] 
    [EmailAddress]
    public string EmailForDocuments { get; set; } = default!;
}