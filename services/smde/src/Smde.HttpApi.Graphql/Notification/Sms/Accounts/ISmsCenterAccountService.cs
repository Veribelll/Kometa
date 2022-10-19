using Kometa.Graphql;

namespace Smde.Notification.Sms.Accounts;

public interface ISmsCenterAccountService : IGraphqlService
{
    Task<SmsCenterAccount> CreateAsync(CreateSmsCenterAccountInput input);
    Task<SmsCenterAccount> UpdateAsync(UpdateSmsCenterAccountInput input);
    Task<SmsCenterAccount> DeleteAsync(Guid id);
}