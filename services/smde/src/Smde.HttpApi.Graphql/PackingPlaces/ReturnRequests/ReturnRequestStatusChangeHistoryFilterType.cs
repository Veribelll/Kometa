using Kometa.Graphql.Types;
using HotChocolate.Data.Filters;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestStatusChangeHistoryFilterType : FilterInputType<ReturnRequestStatusChangeHistory>, IGraphqlType
{
    protected override void Configure(IFilterInputTypeDescriptor<ReturnRequestStatusChangeHistory> descriptor)
    {
        descriptor.Ignore(x => x.ReturnRequestId);

        descriptor
            .Field(x => x.Status)
            .Type<EnumOperationFilterInputType<ReturnRequestStatus>>();
    }
}