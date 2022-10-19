using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class ApplicationFeatureConfigurationType : ObjectType<ApplicationFeatureConfigurationDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ApplicationFeatureConfigurationDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("ApplicationFeatureConfiguration");

        descriptor
            .Field("values")
            .ResolveWith<Resolves>(x => x.GetFeatures(default!))
            .Type<NonNullType<ListType<NonNullType<FeatureType>>>>();
    }

    private record Feature(string Key, string Value);

    private class FeatureType : ObjectType<Feature>
    {
        protected override void Configure(IObjectTypeDescriptor<Feature> descriptor)
        {
            descriptor.BindFieldsExplicitly();

            descriptor.Name("ApplicationFeature");

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
        public List<Feature> GetFeatures([Parent] ApplicationFeatureConfigurationDto obj) =>
            obj.Values.Select(x => new Feature(x.Key, x.Value)).ToList();
    }
}