using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Smde.Notification;
using Smde.Orders;
using static Smde.Permissions.LastMileManagementPermissions.LastMiles;

namespace Smde.LastMiles;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class LastMileMutation : IGraphqlType
{
    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<LastMile> UpdateLastMileAccounts(
        UpdateLastMileAccountsInput input,
        ILastMileService service) =>
        service.UpdateAccountsAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<LastMileSmsTemplate> UpdateLastMileSmsTemplate(
        UpdateLastMileSmsTemplateInput input,
        ILastMileService service) =>
        service.UpdateSmsTemplateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<LastMileSmsTemplate> DeleteLastMileSmsTemplate(
        [ID(nameof(LastMile))] Guid lastMileId,
        TypeOrder typeOrder,
        NotificationEventType eventType,
        ILastMileService service) =>
        service.DeleteSmsTemplateAsync(lastMileId, typeOrder, eventType);

    [Authorize(Policy = ManageStoragePeriod)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<LastMileStoragePeriod> UpdateLastMileStoragePeriod(
        UpdateLastMileStoragePeriodInput input,
        ILastMileService service) =>
        service.UpdateStoragePeriodAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<LastMileReturnPeriod> UpdateLastMileReturnPeriod(
        UpdateLastMileReturnPeriodInput input,
        ILastMileService service) =>
        service.UpdateReturnPeriodAsync(input);
}