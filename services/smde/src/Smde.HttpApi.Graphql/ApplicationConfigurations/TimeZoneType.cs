using Kometa.Graphql.Types;
using HotChocolate.Types;
using TimeZone = Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.TimeZone;

namespace Smde.ApplicationConfigurations;

public class TimeZoneType : ObjectType<TimeZone>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<TimeZone> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.Iana)
            .Type<NonNullType<IanaTimeZoneType>>();

        descriptor
            .Field(x => x.Windows)
            .Type<NonNullType<WindowsTimeZoneType>>();
    }
}