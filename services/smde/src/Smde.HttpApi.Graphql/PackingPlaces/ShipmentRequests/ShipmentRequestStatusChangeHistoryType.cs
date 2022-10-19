using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestStatusChangeHistoryType : ObjectType<ShipmentRequestStatusChangeHistory>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ShipmentRequestStatusChangeHistory> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .CreationAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.ShipmentRequestId)
            .ID(nameof(ShipmentRequest));

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<ShipmentRequestStatusType>>();
    }
}