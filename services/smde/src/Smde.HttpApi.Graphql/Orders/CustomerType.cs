using Kometa.Graphql.Abp;
using HotChocolate.Types;

namespace Smde.Orders;

public class CustomerType : InterfaceType<Customer>
{
    protected override void Configure(IInterfaceTypeDescriptor<Customer> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

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