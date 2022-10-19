using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using HotChocolate;
using HotChocolate.Types;
using Smde.Topology.TemplatesSection;

namespace Smde.Topology.TemplatesPostamat;

public class TemplatePostamatTemplateSectionType : ObjectType<TemplatePostamatTemplateSection>
{
    protected override void Configure(IObjectTypeDescriptor<TemplatePostamatTemplateSection> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.MultiTenant();

        descriptor
            .Field(x => x.TemplatePostamatId)
            .IsProjected()
            .ID(nameof(TemplatePostamat));

        descriptor
            .Field(x => x.TemplateSectionId)
            .IsProjected()
            .ID(nameof(TemplateSection));

        descriptor
            .Field(x => x.Position)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field("templateSection")
            .IsProjected(false)
            .ResolveWith<Resolves>(x => x.GetTemplateSection(default!, default!, default))
            .Type<NonNullType<TemplateSectionType>>();
    }

    private class Resolves
    {
        public Task<TemplateSection> GetTemplateSection(
            [Parent] TemplatePostamatTemplateSection entity,
            IDataLoader<TemplateSection> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(entity.TemplateSectionId, cancellationToken);
    }
}