using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.PermissionManagement;

namespace Smde.Permissions;

public class PermissionListType : ObjectType<GetPermissionListResultDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<GetPermissionListResultDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("PermissionList");

        descriptor
            .Field(x => x.EntityDisplayName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Groups)
            .Type<NonNullType<ListType<NonNullType<PermissionGroupType>>>>();

    }
}