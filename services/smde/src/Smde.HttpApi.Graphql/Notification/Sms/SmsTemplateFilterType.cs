using HotChocolate.Data.Filters;

namespace Smde.Notification.Sms;

public class SmsTemplateFilterType: FilterInputType<SmsTemplate>
{
    protected override void Configure(IFilterInputTypeDescriptor<SmsTemplate> descriptor)
    {
        descriptor
            .Field(x => x.EventType)
            .Type<EnumOperationFilterInputType<NotificationEventType>>();
    }
}