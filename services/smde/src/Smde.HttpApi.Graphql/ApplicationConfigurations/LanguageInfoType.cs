using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.Localization;

namespace Smde.ApplicationConfigurations;

public class LanguageInfoType : ObjectType<LanguageInfo>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<LanguageInfo> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.CultureName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.UiCultureName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.DisplayName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.FlagIcon)
            .Type<StringType>();
    }
}