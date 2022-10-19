using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace Smde.LastMiles.Postamats.Cells;

/// <summary>
/// Отображение
/// </summary>
public class CellDisplay : Entity, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid PostamatId { get; protected set; }

    public Guid TemplateCellId { get; protected set; }

    public Guid? CellId { get; protected set; }

    /// <summary>
    /// Позиция по координате X
    /// </summary>
    public int X { get; set; }

    /// <summary>
    /// Позиция по координате Y
    /// </summary>
    public int Y { get; set; }

    protected CellDisplay()
    {
    }

    internal CellDisplay(
        Guid? tenantId,
        Guid contractorId,
        Guid postamatId,
        Guid templateCellId,
        int x,
        int y,
        Guid? cellId = null)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        PostamatId = postamatId;
        TemplateCellId = templateCellId;
        CellId = cellId;
        X = x;
        Y = y;
    }

    public override object?[] GetKeys()
    {
        return new object?[] { PostamatId, X, Y };
    }
}