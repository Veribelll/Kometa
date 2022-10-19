using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.NotificationManagementPermissions.SmsAccounts;

namespace Smde.Notification.Sms.Accounts;

[ExtendObjectType(OperationTypeNames.Query)]
public class SmsAccountQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<SmsAccount> GetSmsAccountById(
        [ID(nameof(SmsAccount))] Guid id,
        IDataLoader<SmsAccount> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(SmsAccountFilterType))]
    public Task<IQueryable<SmsAccount>> GetSmsAccount(
        IRepository<SmsAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<SmsAccountType>))]
    [UseFiltering(typeof(SmsAccountFilterType))]
    [UseSorting]
    public Task<IQueryable<SmsAccount>> GetSmsAccounts(
        IRepository<SmsAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(SmsAccountFilterType))]
    public Task<IQueryable<SmsAccount>> GetSmsAccountsAny(
        IRepository<SmsAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(SmsAccountFilterType))]
    public Task<IQueryable<SmsAccount>> GetSmsAccountsCount(
        IRepository<SmsAccount, Guid> repository) =>
        repository.GetQueryableAsync();
}