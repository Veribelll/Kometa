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
public class SmsCenterAccountQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<SmsCenterAccount> GetSmsCenterAccountById(
        [ID(nameof(SmsAccount))] Guid id,
        IDataLoader<SmsCenterAccount> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(SmsCenterAccountFilterType))]
    public Task<IQueryable<SmsCenterAccount>> GetSmsCenterAccount(
        IRepository<SmsCenterAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<SmsCenterAccountType>))]
    [UseFiltering(typeof(SmsCenterAccountFilterType))]
    [UseSorting]
    public Task<IQueryable<SmsCenterAccount>> GetSmsCenterAccounts(
        IRepository<SmsCenterAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(SmsCenterAccountFilterType))]
    public Task<IQueryable<SmsCenterAccount>> GetSmsCenterAccountsAny(
        IRepository<SmsCenterAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(SmsCenterAccountFilterType))]
    public Task<IQueryable<SmsCenterAccount>> GetSmsCenterAccountsCount(
        IRepository<SmsCenterAccount, Guid> repository) =>
        repository.GetQueryableAsync();
}