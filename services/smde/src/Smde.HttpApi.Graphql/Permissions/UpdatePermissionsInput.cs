using System.ComponentModel.DataAnnotations;
using Volo.Abp.PermissionManagement;

namespace Smde.Permissions;

public class UpdatePermissionsInput
{
    [Required]
    public string ProviderName { get; set; } = default!;
        
    [Required]
    public string ProviderKey { get; set; } = default!;
        
    [Required]
    public UpdatePermissionsDto Permissions { get; set; } = default!;
}