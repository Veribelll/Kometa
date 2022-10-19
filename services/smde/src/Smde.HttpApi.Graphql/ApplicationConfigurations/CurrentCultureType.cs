using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class CurrentCultureType : ObjectType<CurrentCultureDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<CurrentCultureDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("CurrentCulture");

        descriptor
            .Field(x => x.DisplayName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.EnglishName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ThreeLetterIsoLanguageName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.TwoLetterIsoLanguageName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.IsRightToLeft)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.CultureName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.NativeName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.DateTimeFormat)
            .Type<DateTimeFormatType>();
    }
}