using Microsoft.AspNetCore.Identity;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using IdentityRole = Volo.Abp.Identity.IdentityRole;

namespace Smde.Identity;

public class SmdeIdentityRoleDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IGuidGenerator _guidGenerator;
    private readonly IdentityRoleManager _roleManager;

    public SmdeIdentityRoleDataSeedContributor(
        IGuidGenerator guidGenerator,
        IdentityRoleManager roleManager)
    {
        _guidGenerator = guidGenerator;
        _roleManager = roleManager;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        var tenantId = context.TenantId;

        var generalManager = new IdentityRole(_guidGenerator.Create(), SmdeDefaultRoleNames.GeneralManager, tenantId)
        {
            IsStatic = true,
            IsPublic = true
        };
        var manager = new IdentityRole(_guidGenerator.Create(), SmdeDefaultRoleNames.Manager, tenantId)
        {
            IsStatic = true,
            IsPublic = true
        };
        var working = new IdentityRole(_guidGenerator.Create(), SmdeDefaultRoleNames.Working, tenantId)
        {
            IsStatic = true,
            IsPublic = true
        };
        var courier = new IdentityRole(_guidGenerator.Create(), SmdeDefaultRoleNames.Courier, tenantId)
        {
            IsStatic = true,
            IsPublic = true
        };
        var engineer = new IdentityRole(_guidGenerator.Create(), SmdeDefaultRoleNames.Engineer, tenantId)
        {
            IsStatic = true,
            IsPublic = true
        };
        var postamat = new IdentityRole(_guidGenerator.Create(), SmdeDefaultRoleNames.Postamat, tenantId)
        {
            IsStatic = true,
            IsPublic = false
        };

        (await _roleManager.CreateAsync(generalManager)).CheckErrors();
        (await _roleManager.CreateAsync(manager)).CheckErrors();
        (await _roleManager.CreateAsync(working)).CheckErrors();
        (await _roleManager.CreateAsync(courier)).CheckErrors();
        (await _roleManager.CreateAsync(engineer)).CheckErrors();
        (await _roleManager.CreateAsync(postamat)).CheckErrors();
    }
}