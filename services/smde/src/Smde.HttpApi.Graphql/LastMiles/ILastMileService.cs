using Kometa.Graphql;
using Smde.Notification;
using Smde.Orders;

namespace Smde.LastMiles;

public interface ILastMileService : IGraphqlService
{
    Task<LastMile> UpdateAccountsAsync(UpdateLastMileAccountsInput input);

    Task<LastMileSmsTemplate> UpdateSmsTemplateAsync(UpdateLastMileSmsTemplateInput input);

    Task<LastMileSmsTemplate> DeleteSmsTemplateAsync(Guid lastMileId, TypeOrder typeOrder,
        NotificationEventType eventType);

    Task<LastMileStoragePeriod> UpdateStoragePeriodAsync(UpdateLastMileStoragePeriodInput input);
    Task<LastMileReturnPeriod> UpdateReturnPeriodAsync(UpdateLastMileReturnPeriodInput input);
}