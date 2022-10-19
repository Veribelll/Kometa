using Kometa.Graphql;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.Identity;
using IdentityRole = Volo.Abp.Identity.IdentityRole;

namespace Smde.Identity;

public class IdentityRoleService : GraphqlService, IIdentityRoleService
{
    protected readonly IdentityRoleManager Manager;

    public IdentityRoleService(IdentityRoleManager manager)
    {
        Manager = manager;
    }

    public async Task<IdentityRole> CreateAsync(CreateIdentityRoleInput input)
    {
        var role = new IdentityRole(GuidGenerator.Create(), input.Name, CurrentTenant.Id)
        {
            IsPublic = true
        };
        (await Manager.CreateAsync(role)).CheckErrors();
        return role;
    }

    public async Task<IdentityRole> UpdateAsync(UpdateIdentityRoleInput input)
    {
        var role = await Manager.GetByIdAsync(input.Id);
        (await Manager.SetRoleNameAsync(role, input.Name)).CheckErrors();
        return role;
    }

    public async Task<IdentityRole> DeleteAsync(Guid id)
    {
        var role = await Manager.GetByIdAsync(id);
        (await Manager.DeleteAsync(role)).CheckErrors();
        return role;
    }
}