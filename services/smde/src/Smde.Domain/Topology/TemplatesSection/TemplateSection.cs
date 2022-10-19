using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Topology.TemplatesSection.TemplateSectionConstants;

#pragma warning disable 8618

namespace Smde.Topology.TemplatesSection;

/// <summary>
/// Шаблон секции
/// </summary>
public class TemplateSection : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    private readonly List<TemplateSectionTemplateCell> _cells = new();

    public Guid? TenantId { get; protected init; }

    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// Ид шаблонов ячеек
    /// </summary>
    public IReadOnlyList<TemplateSectionTemplateCell> Cells => _cells;

    protected TemplateSection()
    {
    }

    internal TemplateSection(
        Guid id,
        Guid? tenantId,
        string name,
        ICollection<(int position, Guid templateCellId)> cells) : base(id)
    {
        Check.NotNullOrEmpty(cells, nameof(cells));
            
        TenantId = tenantId;
        SetName(name);

        foreach (var (position, templateCellId) in cells)
        {
            _cells.Add(new TemplateSectionTemplateCell(TenantId, Id, position, templateCellId));
        }
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }
}