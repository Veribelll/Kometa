using Kometa.Graphql.Types;
using HotChocolate.Data.Filters;

namespace Smde.PackingPlaces;

public class PackingPlaceStatusChangeHistoryFilterType : FilterInputType<PackingPlaceStatusChangeHistory>, IGraphqlType
{
    protected override void Configure(IFilterInputTypeDescriptor<PackingPlaceStatusChangeHistory> descriptor)
    {
        descriptor.Ignore(x => x.PackingPlaceId);

        descriptor
            .Field(x => x.Status)
            .Type<EnumOperationFilterInputType<PackingPlaceStatus>>();
    }
}