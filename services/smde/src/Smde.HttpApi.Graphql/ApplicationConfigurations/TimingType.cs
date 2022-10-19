using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class TimingType : ObjectType<TimingDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<TimingDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("Timing");

        descriptor
            .Field(x => x.TimeZone)
            .Type<NonNullType<TimeZoneType>>();
    }
}