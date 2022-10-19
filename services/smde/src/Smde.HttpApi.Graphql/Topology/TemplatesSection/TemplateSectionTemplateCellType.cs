using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using HotChocolate;
using HotChocolate.Types;
using Smde.Topology.TemplatesCell;

namespace Smde.Topology.TemplatesSection;

public class TemplateSectionTemplateCellType : ObjectType<TemplateSectionTemplateCell>
{
    protected override void Configure(IObjectTypeDescriptor<TemplateSectionTemplateCell> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.MultiTenant();

        descriptor
            .Field(x => x.TemplateSectionId)
            .IsProjected()
            .ID(nameof(TemplateSection));

        descriptor
            .Field(x => x.TemplateCellId)
            .IsProjected()
            .ID(nameof(TemplateCell));

        descriptor
            .Field(x => x.Position)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field("templateCell")
            .IsProjected(false)
            .ResolveWith<Resolves>(x => x.GetTemplateCell(default!, default!, default))
            .Type<NonNullType<TemplateCellType>>();
    }

    private class Resolves
    {
        public Task<TemplateCell> GetTemplateCell(
            [Parent] TemplateSectionTemplateCell entity,
            IDataLoader<TemplateCell> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(entity.TemplateCellId, cancellationToken);
    }
}