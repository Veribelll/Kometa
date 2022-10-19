using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Topology.TemplatesPostamat;

public class TemplatePostamatType : ObjectType<TemplatePostamat>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<TemplatePostamat> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Sections)
            .Type<NonNullType<ListType<NonNullType<TemplatePostamatTemplateSectionType>>>>();
    }
}