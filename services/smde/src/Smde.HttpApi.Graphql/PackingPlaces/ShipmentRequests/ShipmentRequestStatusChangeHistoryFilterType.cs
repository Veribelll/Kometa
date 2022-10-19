using Kometa.Graphql.Types;
using HotChocolate.Data.Filters;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestStatusChangeHistoryFilterType : FilterInputType<ShipmentRequestStatusChangeHistory>, IGraphqlType
{
    protected override void Configure(IFilterInputTypeDescriptor<ShipmentRequestStatusChangeHistory> descriptor)
    {
        descriptor.Ignore(x => x.ShipmentRequestId);

        descriptor
            .Field(x => x.Status)
            .Type<EnumOperationFilterInputType<ShipmentRequestStatus>>();
    }
}