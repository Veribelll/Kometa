using Kometa.Graphql.Abp;
using HotChocolate.Types;

namespace Smde.Notification.Sms.Accounts;

public class SmsCenterAccountType : ObjectType<SmsCenterAccount>
{
    protected override void Configure(IObjectTypeDescriptor<SmsCenterAccount> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Implements<SmsAccountType>();

        descriptor
            .Entity(nameof(SmsAccount))
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Id)
            .ID(nameof(SmsAccount));

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Sender)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Login)
            .Type<NonNullType<StringType>>();
    }
}