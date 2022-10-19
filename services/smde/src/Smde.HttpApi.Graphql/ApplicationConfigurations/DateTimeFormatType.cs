using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class DateTimeFormatType : ObjectType<DateTimeFormatDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<DateTimeFormatDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("DateTimeFormat");

        descriptor
            .Field(x => x.CalendarAlgorithmType)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.DateTimeFormatLong)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ShortDatePattern)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.FullDateTimePattern)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.DateSeparator)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ShortTimePattern)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.LongTimePattern)
            .Type<NonNullType<StringType>>();
    }
}