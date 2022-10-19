using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.NotificationManagementPermissions.SmsMessages;

namespace Smde.Notification.Sms;

[ExtendObjectType(OperationTypeNames.Query)]
public class SmsMessagesQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<SmsMessage> GetSmsMessageById(
        Guid id,
        IDataLoader<SmsMessage> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(SmsMessageFilterType))]
    public Task<IQueryable<SmsMessage>> GetSmsMessage(
        IRepository<SmsMessage, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(SmsMessageType))]
    [UseFiltering(typeof(SmsMessageFilterType))]
    [UseSorting]
    public Task<IQueryable<SmsMessage>> GetSmsMessages(
        IRepository<SmsMessage, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(SmsMessageFilterType))]
    public Task<IQueryable<SmsMessage>> GetSmsMessagesAny(
        IRepository<SmsMessage, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(SmsMessageFilterType))]
    public Task<IQueryable<SmsMessage>> GetSmsMessagesCount(
        IRepository<SmsMessage, Guid> repository) =>
        repository.GetQueryableAsync();
}