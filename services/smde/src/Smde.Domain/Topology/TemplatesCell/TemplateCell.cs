using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Topology.TemplatesCell.TemplateCellConstants;

#pragma warning disable 8618

namespace Smde.Topology.TemplatesCell;

/// <summary>
/// Шаблон ячейки
/// </summary>
public class TemplateCell: FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; protected init; }

    public Guid? SizeId { get; protected set; }
        
    /// <summary>
    /// Тип шаблона
    /// </summary>
    public bool IsCell { get; protected set; }
        
    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; protected set; }
        
    /// <summary>
    /// Ширина
    /// </summary>
    public int Width { get; protected set; }
        
    /// <summary>
    /// Высота
    /// </summary>
    public int Height { get; protected set; }
    
    /// <summary>
    /// Ссылка на изображение
    /// </summary>
    public string? ImageUrl { get; set; }
        
    protected TemplateCell()
    {
            
    }

    internal TemplateCell(
        Guid id,
        Guid? tenantId,
        string name,
        int width,
        int height) : base(id)
    {
        if (height < 1)
        {
            throw new ArgumentOutOfRangeException(nameof(height));
        }

        if (width < 1)
        {
            throw new ArgumentOutOfRangeException(nameof(width));
        }

        TenantId = tenantId;
        SetName(name);
        Height = height;
        Width = width;
        IsCell = false;
    }
        
    internal TemplateCell(
        Guid id,
        Guid? tenantId,
        Guid sizeId,
        string name,
        int width,
        int height) : base(id)
    {
        if (height < 1)
        {
            throw new ArgumentOutOfRangeException(nameof(height));
        }
        if (width < 1)
        {
            throw new ArgumentOutOfRangeException(nameof(width));
        }
            
        TenantId = tenantId;
        SizeId = sizeId;
        SetName(name);
        Height = height;
        Width = width;
        IsCell = true;
    }

    public void SetSizeId(Guid sizeId)
    {
        if (!IsCell)
        {
            return;
        }

        SizeId = sizeId;
    }
        
    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }
}