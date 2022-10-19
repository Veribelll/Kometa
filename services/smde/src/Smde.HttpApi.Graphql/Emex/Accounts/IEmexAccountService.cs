using Kometa.Graphql;

namespace Smde.Emex.Accounts;

public interface IEmexAccountService : IGraphqlService
{
    Task<EmexAccount> CreateAsync(CreateEmexAccountInput input);
    Task<EmexAccount> UpdateAsync(UpdateEmexAccountInput input);
    Task<EmexAccount> DeleteAsync(Guid id);
}