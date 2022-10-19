using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;
using Smde.Orders;

namespace Smde.Emex.Orders;

public class EmexCustomerType : ObjectType<EmexCustomer>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<EmexCustomer> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity(nameof(Customer))
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor.Implements<CustomerType>();

        descriptor
            .Field(x => x.ExternalId)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Phone)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Email)
            .Type<StringType>();
    }
}