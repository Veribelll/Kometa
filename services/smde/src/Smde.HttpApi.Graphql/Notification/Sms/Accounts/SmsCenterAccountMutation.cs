using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.NotificationManagementPermissions.SmsAccounts;

namespace Smde.Notification.Sms.Accounts;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class SmsCenterAccountMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(SmsAccountNameAlreadyExistsException))]
    public Task<SmsCenterAccount> CreateSmsCenterAccount(
        CreateSmsCenterAccountInput input,
        ISmsCenterAccountService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(SmsAccountNameAlreadyExistsException))]
    public Task<SmsCenterAccount> UpdateSmsCenterAccount(
        UpdateSmsCenterAccountInput input,
        ISmsCenterAccountService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<SmsCenterAccount> DeleteSmsCenterAccount(
        [ID(nameof(SmsAccount))] Guid id,
        ISmsCenterAccountService service) =>
        service.DeleteAsync(id);
}