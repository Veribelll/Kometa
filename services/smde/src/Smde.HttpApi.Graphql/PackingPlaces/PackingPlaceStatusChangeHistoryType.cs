using Kometa.Graphql.Abp;
using HotChocolate.Types;

namespace Smde.PackingPlaces;

public class PackingPlaceStatusChangeHistoryType : ObjectType<PackingPlaceStatusChangeHistory>
{
    protected override void Configure(IObjectTypeDescriptor<PackingPlaceStatusChangeHistory> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .CreationAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.PackingPlaceId)
            .ID(nameof(PackingPlace));

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<PackingPlaceStatusType>>();
    }
}