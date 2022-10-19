using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace Smde.Topology.TemplatesPostamat;

public class TemplatePostamatTemplateSection : Entity, IMultiTenant
{
    public Guid? TenantId { get; protected init; }

    public Guid TemplatePostamatId { get; protected set; }
        
    public Guid TemplateSectionId { get; protected set; }

    /// <summary>
    /// Позиция
    /// </summary>
    public int Position { get; protected set; }

    protected TemplatePostamatTemplateSection()
    {
    }
        
    internal TemplatePostamatTemplateSection(
        Guid? tenantId,
        Guid templatePostamatId,
        int position,
        Guid templateSectionId)
    {
        TenantId = tenantId;
        TemplatePostamatId = templatePostamatId;
        Position = position;
        TemplateSectionId = templateSectionId;
    }

    public override object[] GetKeys()
    {
        return new object[] { TemplatePostamatId, Position };
    }

    public void Deconstruct(out Guid templatePostamatId, out Guid templateSectionId, out int position)
    {
        templatePostamatId = TemplatePostamatId;
        templateSectionId = TemplateSectionId;
        position = Position;
    }
}