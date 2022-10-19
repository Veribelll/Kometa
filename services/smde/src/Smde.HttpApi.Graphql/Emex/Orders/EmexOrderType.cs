using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.Emex.Orders;

public class EmexOrderType : ObjectType<EmexOrder>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<EmexOrder> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<EnumType<EmexOrderStatus>>>();

        descriptor
            .Field(x => x.ExternalId)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.GlobalId)
            .Type<NonNullType<LongType>>();

        descriptor
            .Field(x => x.CustomerId)
            .ID(nameof(EmexCustomer));

        descriptor
            .Field(x => x.IsLocked)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.Products)
            .Type<NonNullType<ListType<NonNullType<EmexProductType>>>>()
            .UseFiltering<EmexProductFilterType>()
            .UseSorting<EmexProductSortType>();

        descriptor
            .Field("customer")
            .ResolveWith<Resolves>(x => x.GetCustomer(default!, default!, default))
            .Type<NonNullType<EmexCustomerType>>();
    }

    private class Resolves
    {
        public Task<EmexCustomer> GetCustomer(
            [Parent] EmexOrder order,
            IDataLoader<EmexCustomer> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(order.CustomerId, cancellationToken);
    }
}