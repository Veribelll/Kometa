using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Topology.TemplatesPostamat.TemplatePostamatConstants;

#pragma warning disable 8618

namespace Smde.Topology.TemplatesPostamat;

/// <summary>
/// Шаблон постамата 
/// </summary>
public class TemplatePostamat : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    private readonly List<TemplatePostamatTemplateSection> _sections = new();

    public Guid? TenantId { get; protected init; }

    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// Ид шаблонов секций
    /// </summary>
    public IReadOnlyList<TemplatePostamatTemplateSection> Sections => _sections;

    protected TemplatePostamat()
    {
    }

    public TemplatePostamat(
        Guid id,
        Guid? tenantId,
        string name,
        ICollection<(int position, Guid templateSectionId)> sections) : base(id)
    {
        Check.NotNullOrEmpty(sections, nameof(sections));
            
        TenantId = tenantId;
        SetName(name);

        foreach (var (position, templateSectionId) in sections)
        {
            _sections.Add(new TemplatePostamatTemplateSection(TenantId, Id, position, templateSectionId));
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