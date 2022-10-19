using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

#pragma warning disable CS8618

namespace Smde.PackingPlaces;

/// <summary>
/// История изменения статуса 
/// </summary>
public class PackingPlaceStatusChangeHistory : CreationAuditedEntity, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid PackingPlaceId { get; protected init; }

    /// <summary>
    /// Статус
    /// </summary>
    public PackingPlaceStatus Status { get; protected init; }

    protected PackingPlaceStatusChangeHistory()
    {
    }

    internal PackingPlaceStatusChangeHistory(
        Guid? tenantId,
        Guid contractorId,
        Guid packingPlaceId,
        PackingPlaceStatus status)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        PackingPlaceId = packingPlaceId;
        Status = status;
    }

    public override object[] GetKeys()
    {
        return new object[] { PackingPlaceId, Status, CreationTime };
    }
}