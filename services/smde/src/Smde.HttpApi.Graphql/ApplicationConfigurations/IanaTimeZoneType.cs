using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class IanaTimeZoneType : ObjectType<IanaTimeZone>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<IanaTimeZone> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.TimeZoneName)
            .Type<NonNullType<StringType>>();
    }
}