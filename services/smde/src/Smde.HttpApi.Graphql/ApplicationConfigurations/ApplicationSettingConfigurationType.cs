using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class ApplicationSettingConfigurationType : ObjectType<ApplicationSettingConfigurationDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ApplicationSettingConfigurationDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("ApplicationSettingConfiguration");

        descriptor
            .Field("values")
            .ResolveWith<Resolves>(x => x.GetSettings(default!))
            .Type<NonNullType<ListType<NonNullType<SettingType>>>>();
    }

    private record Setting(string Key, string Value);

    private class SettingType : ObjectType<Setting>
    {
        protected override void Configure(IObjectTypeDescriptor<Setting> descriptor)
        {
            descriptor.BindFieldsExplicitly();

            descriptor.Name("ApplicationSetting");

            descriptor
                .Field(x => x.Key)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(x => x.Value)
                .Type<NonNullType<StringType>>();
        }
    }

    private class Resolves
    {
        public List<Setting> GetSettings([Parent] ApplicationSettingConfigurationDto obj) =>
            obj.Values.Select(x => new Setting(x.Key, x.Value)).ToList();
    }
}