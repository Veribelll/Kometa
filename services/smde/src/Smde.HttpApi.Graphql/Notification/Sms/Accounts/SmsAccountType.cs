using Kometa.Graphql.Abp;
using HotChocolate.Types;

namespace Smde.Notification.Sms.Accounts;

public class SmsAccountType : InterfaceType<SmsAccount>
{
    protected override void Configure(IInterfaceTypeDescriptor<SmsAccount> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Id)
            .ID();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Sender)
            .Type<NonNullType<StringType>>();
    }
}