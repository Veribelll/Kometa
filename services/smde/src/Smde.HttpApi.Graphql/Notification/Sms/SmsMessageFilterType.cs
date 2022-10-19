using HotChocolate.Data.Filters;

namespace Smde.Notification.Sms;

public class SmsMessageFilterType: FilterInputType<SmsMessage>
{
    protected override void Configure(IFilterInputTypeDescriptor<SmsMessage> descriptor)
    {
    }
}