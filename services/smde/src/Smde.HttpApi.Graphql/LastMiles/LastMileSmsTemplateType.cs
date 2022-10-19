using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Notification;
using Smde.Notification.Sms;
using Smde.Orders;

namespace Smde.LastMiles;

public class LastMileSmsTemplateType : ObjectType<LastMileSmsTemplate>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<LastMileSmsTemplate> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.LastMileId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.SmsTemplateId)
            .ID(nameof(SmsTemplate));

        descriptor
            .Field(x => x.TypeOrder)
            .Type<NonNullType<TypeOrderType>>();

        descriptor
            .Field(x => x.EventType)
            .Type<NonNullType<EnumType<NotificationEventType>>>();

        descriptor
            .Field("smsTemplate")
            .ResolveWith<Resolves>(x => x.GetSmsTemplate(default!, default!, default))
            .Type<NonNullType<SmsTemplateType>>();
    }


    private class Resolves
    {
        public Task<SmsTemplate> GetSmsTemplate(
            [Parent] LastMileSmsTemplate template,
            IDataLoader<SmsTemplate> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(template.SmsTemplateId, cancellationToken);
    }
}