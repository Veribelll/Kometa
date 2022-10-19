using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.NotificationManagementPermissions.SmsTemplates;

namespace Smde.Notification.Sms;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class SmsTemplateMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(SmsTemplateNameAlreadyExistsException))]
    public Task<SmsTemplate> CreateSmsTemplate(
        CreateSmsTemplateInput input,
        ISmsTemplateService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(SmsTemplateNameAlreadyExistsException))]
    public Task<SmsTemplate> UpdateSmsTemplate(
        UpdateSmsTemplateInput input,
        ISmsTemplateService service)
        => service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<SmsTemplate> DeleteSmsTemplate(
        [ID(nameof(SmsTemplate))] Guid id,
        ISmsTemplateService service) =>
        service.DeleteAsync(id);
}