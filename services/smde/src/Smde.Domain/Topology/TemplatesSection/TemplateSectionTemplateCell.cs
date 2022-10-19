using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace Smde.Topology.TemplatesSection;

public class TemplateSectionTemplateCell : Entity, IMultiTenant
{
    public Guid? TenantId { get; protected init; }

    public Guid TemplateSectionId { get; protected set; }
        
    public Guid TemplateCellId { get; protected set; }

    /// <summary>
    /// Позиция
    /// </summary>
    public int Position { get; protected set; }

    protected TemplateSectionTemplateCell()
    {
    }
        
    internal TemplateSectionTemplateCell(
        Guid? tenantId,
        Guid templateSectionId,
        int position, 
        Guid templateCellId)
    {
        TenantId = tenantId;
        TemplateSectionId = templateSectionId;
        Position = position;
        TemplateCellId = templateCellId;
    }
        
    public override object[] GetKeys()
    {
        return new object[] { TemplateSectionId, Position };
    }

    public void Deconstruct(out Guid templateSectionId, out Guid templateCellId, out int position)
    {
        templateSectionId = TemplateSectionId;
        templateCellId = TemplateCellId;
        position = Position;
    }
}