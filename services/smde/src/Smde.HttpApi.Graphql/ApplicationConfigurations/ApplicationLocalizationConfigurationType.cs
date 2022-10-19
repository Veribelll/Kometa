using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class ApplicationLocalizationConfigurationType : ObjectType<ApplicationLocalizationConfigurationDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ApplicationLocalizationConfigurationDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("ApplicationLocalizationConfiguration");

        descriptor
            .Field(x => x.Values)
            .Name("texts");

        descriptor
            .Field(x => x.Languages)
            .Type<NonNullType<ListType<NonNullType<LanguageInfoType>>>>();

        descriptor
            .Field(x => x.CurrentCulture)
            .Type<NonNullType<CurrentCultureType>>();

        descriptor
            .Field(x => x.DefaultResourceName)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.LanguagesMap);

        descriptor
            .Field(x => x.LanguageFilesMap);
    }
}