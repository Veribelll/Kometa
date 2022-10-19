using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.PermissionManagement;

namespace Smde.Permissions;

public class ProviderInfoType : ObjectType<ProviderInfoDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ProviderInfoDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("ProviderInfo");

        descriptor
            .Field(x => x.ProviderKey)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ProviderName)
            .Type<NonNullType<StringType>>();
    }
}