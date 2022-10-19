using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants;

public class DeleteTenantInput
{
    [Required]
    [ID(nameof(Tenant))]
    public Guid Id { get; set; }
}