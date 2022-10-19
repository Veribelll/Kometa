using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.NotificationManagementPermissions.SmsTemplates;

namespace Smde.Notification.Sms;

[ExtendObjectType(OperationTypeNames.Query)]
public class SmsTemplateQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<SmsTemplate> GetSmsTemplateById(
        Guid id,
        IDataLoader<SmsTemplate> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(SmsTemplateFilterType))]
    public Task<IQueryable<SmsTemplate>> GetSmsTemplate(
        IRepository<SmsTemplate, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<SmsTemplateType>))]
    [UseFiltering(typeof(SmsTemplateFilterType))]
    [UseSorting]
    public Task<IQueryable<SmsTemplate>> GetSmsTemplates(
        IRepository<SmsTemplate, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(SmsTemplateFilterType))]
    public Task<IQueryable<SmsTemplate>> GetSmsTemplatesAny(
        IRepository<SmsTemplate, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(SmsTemplateFilterType))]
    public Task<IQueryable<SmsTemplate>> GetSmsTemplatesCount(
        IRepository<SmsTemplate, Guid> repository) =>
        repository.GetQueryableAsync();
}