using Kometa.Graphql;
using Smde.LastMiles.Postamats.Cells;
using Smde.Topology.TemplatesCell;
using Smde.Topology.TemplatesPostamat;
using Smde.Topology.TemplatesSection;
using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.Postamats.Topology;

public class TopologyService : GraphqlService, ITopologyService
{
    protected readonly IRepository<Postamat, Guid> PostamatRepository;
    protected readonly IRepository<TemplateCell, Guid> TemplateCellRepository;
    protected readonly IRepository<TemplateSection, Guid> TemplateSectionRepository;
    protected readonly IRepository<TemplatePostamat, Guid> TemplatePostamatRepository;

    public TopologyService(
        IRepository<Postamat, Guid> postamatRepository,
        IRepository<TemplateCell, Guid> templateCellRepository,
        IRepository<TemplateSection, Guid> templateSectionRepository,
        IRepository<TemplatePostamat, Guid> templatePostamatRepository)
    {
        PostamatRepository = postamatRepository;
        TemplateCellRepository = templateCellRepository;
        TemplateSectionRepository = templateSectionRepository;
        TemplatePostamatRepository = templatePostamatRepository;
    }

    public async Task<Postamat> UpdateAsync(UpdateTopologyInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamatId = input.PostamatId;
        var prefixName = input.PrefixName;
        var prefixBarcode = input.PrefixBarcode;
        var templatePostamatId = input.TemplatePostamatId;

        var postamat = await PostamatRepository.GetAsync(postamatId, false, cancellationToken);

        postamat.Cells.Clear();
        postamat.Displays.Clear();

        var locks = postamat.Controllers.GetAllLocks();

        var i = 1;

        foreach (var @lock in locks)
        {
            var cell = postamat.Cells.Add(
                GuidGenerator.Create(),
                TypeCell.Cell,
                $"{prefixName}{i}",
                $"{prefixBarcode}{i}");

            postamat.AssignLockToCell(cell.Id, @lock.Id);
            i++;
        }

        if (templatePostamatId is not null)
        {
            var z = 0;

            var templatePostamat = await TemplatePostamatRepository.GetAsync(templatePostamatId.Value, true,
                cancellationToken);
            foreach (var (_, templateSectionId, x) in templatePostamat.Sections.OrderBy(x => x.Position))
            {
                var templateSection = await TemplateSectionRepository.GetAsync(templateSectionId, true,
                    cancellationToken);

                foreach (var (_, templateCellId, y) in templateSection.Cells.OrderBy(c => c.Position))
                {
                    var templateCell = await TemplateCellRepository.GetAsync(templateCellId, true,
                        cancellationToken);

                    Guid? cellId = null;

                    if (templateCell.IsCell && z < postamat.Cells.Count)
                    {
                        cellId = postamat.Cells[z].Id;
                        z++;
                    }

                    postamat.Displays.Add(templateCell.Id, x, y, cellId);
                }
            }
        }

        await PostamatRepository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> UpdateDisplayAsync(UpdatePostamatDisplayInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamatId = input.PostamatId;

        var postamat = await PostamatRepository.GetAsync(postamatId, false, cancellationToken);

        postamat.Displays.Clear();

        foreach (var display in input.CellDisplays)
        {
            postamat.Displays.Add(display.TemplateCellId, display.X, display.Y, display.CellId);
        }

        await PostamatRepository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }
}