using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp;

namespace Smde.ApplicationConfigurations;

public class NameValueType : ObjectType<NameValue>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<NameValue> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Value)
            .Type<StringType>();
    }
}