using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;
using Smde.Notification.Sms.Accounts;

namespace Smde.Notification.Sms;

public class SmsMessageType : ObjectType<SmsMessage>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<SmsMessage> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.AccountId)
            .IsProjected()
            .ID(nameof(SmsAccount));

        descriptor
            .Field(x => x.IsSuccess)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.PhoneNumber)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Text)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.TimeDispatch)
            .Type<DateTimeType>();

        descriptor
            .Field(x => x.Error)
            .Type<StringType>();
    }
}