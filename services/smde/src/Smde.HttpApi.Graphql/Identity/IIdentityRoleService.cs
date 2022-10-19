using Kometa.Graphql;
using Volo.Abp.Identity;

namespace Smde.Identity;

public interface IIdentityRoleService : IGraphqlService
{
    Task<IdentityRole> CreateAsync(CreateIdentityRoleInput input);
    Task<IdentityRole> UpdateAsync(UpdateIdentityRoleInput input);
    Task<IdentityRole> DeleteAsync(Guid id);
}