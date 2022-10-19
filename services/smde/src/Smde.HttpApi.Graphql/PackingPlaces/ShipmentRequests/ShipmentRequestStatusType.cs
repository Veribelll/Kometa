using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestStatusType : EnumType<ShipmentRequestStatus>, IGraphqlType
{
    protected override void Configure(IEnumTypeDescriptor<ShipmentRequestStatus> descriptor)
    {
        descriptor.BindValuesExplicitly();

        foreach (var status in ShipmentRequestStatus.List)
        {
            descriptor
                .Value(status)
                .Name(status.Name);
        }
    }
}