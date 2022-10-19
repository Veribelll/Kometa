using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestStatusType : EnumType<ReturnRequestStatus>, IGraphqlType
{
    protected override void Configure(IEnumTypeDescriptor<ReturnRequestStatus> descriptor)
    {
        descriptor.BindValuesExplicitly();

        foreach (var status in ReturnRequestStatus.List)
        {
            descriptor
                .Value(status)
                .Name(status.Name);
        }
    }
}