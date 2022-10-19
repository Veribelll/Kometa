using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.MultiTenancy;

namespace Smde.ApplicationConfigurations;

public class MultiTenancyInfoType : ObjectType<MultiTenancyInfoDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<MultiTenancyInfoDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("MultiTenancyInfo");

        descriptor
            .Field(x => x.IsEnabled)
            .Type<NonNullType<BooleanType>>();
    }
}