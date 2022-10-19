using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Topology.TemplatesSection;

public class TemplateSectionType : ObjectType<TemplateSection>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<TemplateSection> descriptor)
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
            .Field(x => x.Cells)
            .Type<NonNullType<ListType<NonNullType<TemplateSectionTemplateCellType>>>>();
    }
}