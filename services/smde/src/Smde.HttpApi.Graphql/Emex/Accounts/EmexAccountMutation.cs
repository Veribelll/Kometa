using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.EmexPermissions.Accounts;

namespace Smde.Emex.Accounts;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class EmexAccountMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexAccountNameAlreadyExistsException))]
    [Error(typeof(EmexAccountUserIdAlreadyExistsException))]
    public Task<EmexAccount> CreateEmexAccount(
        CreateEmexAccountInput input,
        IEmexAccountService service)
        => service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(EmexAccountNameAlreadyExistsException))]
    [Error(typeof(EmexAccountUserIdAlreadyExistsException))]
    public Task<EmexAccount> UpdateEmexAccount(
        UpdateEmexAccountInput input,
        IEmexAccountService service)
        => service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<EmexAccount> DeleteEmexAccount(
        [ID(nameof(EmexAccount))] Guid id,
        IEmexAccountService service)
        => service.DeleteAsync(id);
}