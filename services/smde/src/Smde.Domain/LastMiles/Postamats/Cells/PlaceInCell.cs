using Kometa.MultiContractor.Current;
using Smde.Orders;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

#pragma warning disable 8618

namespace Smde.LastMiles.Postamats.Cells;

public class PlaceInCell : Entity, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid CellId { get; protected init; }

    public Guid PackingPlaceId { get; protected init; }

    /// <summary>
    /// Хранить до
    /// </summary>
    public DateTime? StoreUntil { get; protected init; }

    public virtual bool Reserved { get; protected set; }

    protected PlaceInCell()
    {
    }

    internal PlaceInCell(
        Guid? tenantId,
        Guid contractorId,
        Guid cellId,
        Guid packingPlaceId,
        bool reserved,
        DateTime? storeUntil = null)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        CellId = cellId;
        PackingPlaceId = packingPlaceId;
        Reserved = reserved;
        StoreUntil = storeUntil;
    }

    public override object[] GetKeys()
    {
        return new object[] { CellId, PackingPlaceId };
    }

    internal void Put()
    {
        Reserved = false;
    }
}