using Kometa.Graphql;
using Volo.Abp.Identity;

namespace Smde.Identity;

public interface IIdentityUserService : IGraphqlService
{
    Task<IdentityUser> CreateEmployeeAsync(CreateEmployeeInput input);
    Task<IdentityUser> UpdateEmployeeAsync(UpdateEmployeeInput input);
    Task<IdentityUser> DeleteEmployeeAsync(Guid id);
}