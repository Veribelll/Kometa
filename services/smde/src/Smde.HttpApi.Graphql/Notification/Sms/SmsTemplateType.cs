using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Notification.Sms;

public class SmsTemplateType : ObjectType<SmsTemplate>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<SmsTemplate> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.EventType)
            .Type<NonNullType<EnumType<NotificationEventType>>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Template)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Comment)
            .Type<StringType>();
    }
}