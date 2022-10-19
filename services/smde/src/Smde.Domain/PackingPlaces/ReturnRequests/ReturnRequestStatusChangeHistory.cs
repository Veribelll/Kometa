using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

#pragma warning disable CS8618

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestStatusChangeHistory : CreationAuditedEntity, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid ReturnRequestId { get; protected init; }

    /// <summary>
    /// Статус
    /// </summary>
    public ReturnRequestStatus Status { get; protected init; }

    protected ReturnRequestStatusChangeHistory()
    {
    }

    internal ReturnRequestStatusChangeHistory(
        Guid? tenantId,
        Guid contractorId,
        Guid returnRequestId,
        ReturnRequestStatus status)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        ReturnRequestId = returnRequestId;
        Status = status;
    }

    public override object[] GetKeys()
    {
        return new object[] { ReturnRequestId, Status, CreationTime };
    }
}