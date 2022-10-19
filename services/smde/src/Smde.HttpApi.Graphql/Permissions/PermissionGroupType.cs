using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.PermissionManagement;

namespace Smde.Permissions;

public class PermissionGroupType : ObjectType<PermissionGroupDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<PermissionGroupDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("PermissionGroup");

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.DisplayName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Permissions)
            .Type<NonNullType<ListType<NonNullType<PermissionGrantInfoType>>>>();
    }
}