using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using HotChocolate;
using HotChocolate.Types;
using Smde.Topology.TemplatesCell;

namespace Smde.LastMiles.Postamats.Cells;

public class CellDisplayType : ObjectType<CellDisplay>
{
    protected override void Configure(IObjectTypeDescriptor<CellDisplay> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.PostamatId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.TemplateCellId)
            .ID(nameof(TemplateCell));

        descriptor
            .Field(x => x.CellId)
            .ID(nameof(Cell));

        descriptor
            .Field(x => x.X)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field(x => x.Y)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field("templateCell")
            .ResolveWith<Resolves>(x => x.GetTemplateCell(default!, default!, default))
            .Type<NonNullType<TemplateCellType>>();

        descriptor
            .Field("cell")
            .ResolveWith<Resolves>(x => x.GetCell(default!, default!, default!))
            .Type<CellType>();
    }

    class Resolves
    {
        public Task<TemplateCell> GetTemplateCell(
            [Parent] CellDisplay cellDisplay,
            IDataLoader<TemplateCell> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(cellDisplay.TemplateCellId, cancellationToken);

        public Task<Cell?> GetCell(
            [Parent] CellDisplay cellDisplay,
            CellDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(cellDisplay.CellId, cancellationToken);
    }
}