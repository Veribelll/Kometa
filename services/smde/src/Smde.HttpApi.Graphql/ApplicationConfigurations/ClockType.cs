using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class ClockType : ObjectType<ClockDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ClockDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("Clock");

        descriptor
            .Field(x => x.Kind)
            .Type<NonNullType<StringType>>();
    }
}