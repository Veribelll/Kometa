using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

#pragma warning disable CS8618

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestStatusChangeHistory : CreationAuditedEntity, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid ShipmentRequestId { get; protected init; }

    /// <summary>
    /// Статус
    /// </summary>
    public ShipmentRequestStatus Status { get; protected init; }

    protected ShipmentRequestStatusChangeHistory()
    {
    }

    internal ShipmentRequestStatusChangeHistory(
        Guid? tenantId,
        Guid contractorId,
        Guid shipmentRequestId,
        ShipmentRequestStatus status)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        ShipmentRequestId = shipmentRequestId;
        Status = status;
    }

    public override object[] GetKeys()
    {
        return new object[] { ShipmentRequestId, Status, CreationTime };
    }
}