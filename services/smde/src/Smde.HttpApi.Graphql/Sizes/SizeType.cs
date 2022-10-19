using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Sizes;

public class SizeType : ObjectType<Size>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<Size> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Entity();
        descriptor.MultiTenant();
        descriptor.FullAudited();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();
    }
}