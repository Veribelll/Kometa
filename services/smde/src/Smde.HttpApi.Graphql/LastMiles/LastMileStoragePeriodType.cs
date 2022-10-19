using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;
using Smde.Orders;

namespace Smde.LastMiles;

public class LastMileStoragePeriodType : ObjectType<LastMileStoragePeriod>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<LastMileStoragePeriod> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.LastMileId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.TypeOrder)
            .Type<NonNullType<TypeOrderType>>();

        descriptor
            .Field(x => x.Period)
            .Type<NonNullType<IntType>>();
    }
}