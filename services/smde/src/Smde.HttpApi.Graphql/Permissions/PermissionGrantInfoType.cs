using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.PermissionManagement;

namespace Smde.Permissions;

public class PermissionGrantInfoType : ObjectType<PermissionGrantInfoDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<PermissionGrantInfoDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("PermissionGrantInfo");

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.DisplayName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ParentName)
            .Type<StringType>();

        descriptor
            .Field(x => x.IsGranted)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.AllowedProviders)
            .Type<NonNullType<ListType<NonNullType<StringType>>>>();

        descriptor
            .Field(x => x.GrantedProviders)
            .Type<NonNullType<ListType<NonNullType<ProviderInfoType>>>>();
    }
}