using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace Smde.Identity;

public interface ISmdeIdentityUserRepository : IIdentityUserRepository, IRepository<IdentityUser, Guid>
{
    Task<IdentityUser> GetByEmailAsync(string email, bool includeDetails = false,
        CancellationToken cancellationToken = default);

    Task<IdentityUser> GetEmployeeAsync(Guid id, bool includeDetails = false,
        CancellationToken cancellationToken = default);

    Task<IdentityUser> GetEmployeeAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false, CancellationToken cancellationToken = default);

    Task<List<IdentityUser>> GetEmployeesAsync(bool includeDetails = false,
        CancellationToken cancellationToken = default);

    Task<List<IdentityUser>> GetEmployeesAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false, CancellationToken cancellationToken = default);

    Task<IdentityUser> GetCourierAsync(Guid id, bool includeDetails = false,
        CancellationToken cancellationToken = default);

    Task<IdentityUser> GetCourierAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false, CancellationToken cancellationToken = default);

    Task<List<IdentityUser>> GetCouriersAsync(bool includeDetails = false,
        CancellationToken cancellationToken = default);

    Task<List<IdentityUser>> GetCouriersAsync(Func<IdentityUser, bool> predicate,
        bool includeDetails = false, CancellationToken cancellationToken = default);

    Task<bool> IsCourierAsync(Guid identityUserId, CancellationToken cancellationToken = default);
}