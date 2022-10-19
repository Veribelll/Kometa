using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Contractors.IndividualEntrepreneurs;

public class IndividualEntrepreneurType : ObjectType<IndividualEntrepreneur>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<IndividualEntrepreneur> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Implements<ContractorType>();

        descriptor.MultiTenant();
        descriptor.FullAudited();

        descriptor
            .Field(x => x.Id)
            .ID(nameof(Contractor));

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
            .Field(x => x.Ogrnip)
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