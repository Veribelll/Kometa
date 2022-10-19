using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using IdentityUser = Volo.Abp.Identity.IdentityUser;
using IdentityRole = Volo.Abp.Identity.IdentityRole;

namespace Smde.Identity;

[Dependency(ReplaceServices = true)]
public class SmdeIdentityDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    public const string AdminEmailPropertyName = "AdminEmail";
    public const string AdminPasswordPropertyName = "AdminPassword";
    public const string ContractorIdPropertyName = "ContractorId";

    protected readonly IGuidGenerator GuidGenerator;
    protected readonly IIdentityRoleRepository RoleRepository;
    protected readonly ISmdeIdentityUserRepository UserRepository;
    protected readonly ILookupNormalizer LookupNormalizer;
    protected readonly IdentityUserManager UserManager;
    protected readonly IdentityRoleManager RoleManager;
    protected readonly ICurrentTenant CurrentTenant;
    protected readonly IOptions<IdentityOptions> Options;

    public SmdeIdentityDataSeedContributor(
        IGuidGenerator guidGenerator,
        IIdentityRoleRepository roleRepository,
        ISmdeIdentityUserRepository userRepository,
        ILookupNormalizer lookupNormalizer,
        IdentityUserManager userManager,
        IdentityRoleManager roleManager,
        ICurrentTenant currentTenant,
        IOptions<IdentityOptions> options)
    {
        GuidGenerator = guidGenerator;
        RoleRepository = roleRepository;
        UserRepository = userRepository;
        LookupNormalizer = lookupNormalizer;
        UserManager = userManager;
        RoleManager = roleManager;
        CurrentTenant = currentTenant;
        Options = options;
    }

    public virtual async Task SeedAsync(DataSeedContext context)
    {
        var tenantId = context.TenantId;
        var adminEmail = (string)context[AdminEmailPropertyName];
        var adminPassword = (string)context[AdminPasswordPropertyName];
        var contractorId = (Guid)context[ContractorIdPropertyName];

        using (CurrentTenant.Change(tenantId))
        {
            await Options.SetAsync();

            var adminUser = await UserRepository.FindByNormalizedEmailAsync(
                LookupNormalizer.NormalizeEmail(adminEmail)
            );

            if (adminUser != null)
            {
                return;
            }

            adminUser = new IdentityUser(
                GuidGenerator.Create(),
                adminEmail,
                adminEmail,
                tenantId
            )
            {
                Name = adminEmail
            };
            
            (await UserManager.CreateAsync(adminUser, adminPassword, false)).CheckErrors();

            adminUser.SetContractorIds(new List<Guid> { contractorId });

            (await UserManager.UpdateAsync(adminUser)).CheckErrors();
            
            const string adminRoleName = "admin";

            var adminRole = await RoleRepository
                .FindByNormalizedNameAsync(LookupNormalizer.NormalizeName(adminRoleName));
            if (adminRole == null)
            {
                adminRole = new IdentityRole(
                    GuidGenerator.Create(),
                    adminRoleName,
                    tenantId
                )
                {
                    IsStatic = true,
                    IsPublic = false
                };

                (await RoleManager.CreateAsync(adminRole)).CheckErrors();
            }

            (await UserManager.AddToRoleAsync(adminUser, adminRoleName)).CheckErrors();
        }
    }
}