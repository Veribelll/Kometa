using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class WindowsTimeZoneType : ObjectType<WindowsTimeZone>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<WindowsTimeZone> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.TimeZoneId)
            .Type<NonNullType<StringType>>();
    }
}