using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestStatusChangeHistoryType : ObjectType<ReturnRequestStatusChangeHistory>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ReturnRequestStatusChangeHistory> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .CreationAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.ReturnRequestId)
            .ID(nameof(ReturnRequest));

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<ReturnRequestStatusType>>();
    }
}