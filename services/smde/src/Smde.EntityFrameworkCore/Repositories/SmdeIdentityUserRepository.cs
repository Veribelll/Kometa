using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Smde.Identity;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Smde.EntityFrameworkCore.Repositories;

[Dependency(ReplaceServices = true)]
public class SmdeIdentityUserRepository : EfCoreIdentityUserRepository, ISmdeIdentityUserRepository
{
    protected readonly ILookupNormalizer Normalizer;

    public SmdeIdentityUserRepository(
        IDbContextProvider<IIdentityDbContext> dbContextProvider,
        ILookupNormalizer normalizer) : base(
        dbContextProvider)
    {
        Normalizer = normalizer;
    }

    public async Task<IdentityUser> GetByEmailAsync(string email, bool includeDetails = false, CancellationToken cancellationToken = default)
    {
        var normalizedEmail = Normalizer.NormalizeEmail(email);
        return await (await GetDbSetAsync())
            .IncludeDetails(includeDetails)
            .OrderBy(x => x.Id)
            .FirstAsync(u => u.NormalizedEmail == normalizedEmail, GetCancellationToken(cancellationToken));
    }

    public virtual Task<IdentityUser> GetEmployeeAsync(Guid id, bool includeDetails = false,
        CancellationToken cancellationToken = default) =>
        GetEmployeeAsync(x => x.Id == id, includeDetails, cancellationToken);

    public virtual async Task<List<IdentityUser>> GetEmployeesAsync(bool includeDetails = false,
        CancellationToken cancellationToken = default)
    {
        var users = await (await GetDbSetAsync()).IncludeDetails(includeDetails)
            .ToListAsync(cancellationToken);
        return users.Where(x => x.GetIsEmployee()).ToList();
    }
    
    public virtual async Task<IdentityUser> GetEmployeeAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false, CancellationToken cancellationToken = default)
    {
        return (await GetEmployeesAsync(includeDetails, cancellationToken)).First(predicate);
    }
    
    public virtual async Task<List<IdentityUser>> GetEmployeesAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false,
        CancellationToken cancellationToken = default)
    {
        return (await GetEmployeesAsync(includeDetails, cancellationToken))
            .Where(predicate)
            .ToList();
    }

    public virtual Task<IdentityUser> GetCourierAsync(Guid id, bool includeDetails = false,
        CancellationToken cancellationToken = default) =>
        GetCourierAsync(x => x.Id == id, includeDetails, cancellationToken);

    public virtual async Task<List<IdentityUser>> GetCouriersAsync(bool includeDetails = false,
        CancellationToken cancellationToken = default)
    {
        var dbContext = await GetDbContextAsync();
        var role = await dbContext.Roles
            .Where(x => x.Name == SmdeDefaultRoleNames.Courier)
            .FirstAsync(cancellationToken);

        var users = await (await GetDbSetAsync())
            .Where(x => x.Roles.Select(r => r.RoleId).Contains(role.Id))
            .ToListAsync(cancellationToken);
        
        return users.Where(x=>x.GetIsEmployee()).ToList();
    }

    public virtual async Task<IdentityUser> GetCourierAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false, CancellationToken cancellationToken = default)
    {
        return (await GetCouriersAsync(includeDetails, cancellationToken)).First(predicate);
    }

    public virtual async Task<List<IdentityUser>> GetCouriersAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false,
        CancellationToken cancellationToken = default)
    {
        return (await GetCouriersAsync(includeDetails, cancellationToken)).Where(predicate).ToList();
    }
    
    public virtual async Task<bool> IsCourierAsync(Guid identityUserId, CancellationToken cancellationToken = default)
    {
        return (await GetCouriersAsync(false, cancellationToken)).Any(x => x.Id == identityUserId);
    }
}