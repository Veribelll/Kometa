using HotChocolate.Types;
using Smde.Emex.Accounts;
using Smde.Notification.Sms.Accounts;

namespace Smde.LastMiles;

public class LastMileAccountIdsType: ObjectType<LastMileAccountIds>
{
    protected override void Configure(IObjectTypeDescriptor<LastMileAccountIds> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.EmexAccountId)
            .ID(nameof(EmexAccount));

        descriptor
            .Field(x => x.SmsAccountId)
            .ID(nameof(SmsAccount));
    }
}