using Kometa.Graphql.Abp;
using HotChocolate.Types;

namespace Smde.Contractors;

public class ContractorType : InterfaceType<Contractor>
{
    protected override void Configure(IInterfaceTypeDescriptor<Contractor> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.MultiTenant();
        descriptor.FullAudited();

        descriptor
            .Field(x => x.Id)
            .ID();

        descriptor
            .Field(x => x.AccountBank)
            .Type<NonNullType<AccountBankType>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Inn)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Okpo)
            .Type<StringType>();

        descriptor
            .Field(x => x.Address)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ActualAddress)
            .Type<StringType>();

        descriptor
            .Field(x => x.MailingAddress)
            .Type<StringType>();

        descriptor
            .Field(x => x.IsHost)
            .Type<NonNullType<BooleanType>>();
    }
}