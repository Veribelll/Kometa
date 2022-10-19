using Kometa.MultiContractor.Current;
using Smde.Notification;
using Smde.Orders;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

#pragma warning disable 8618

namespace Smde.LastMiles;

public class LastMileSmsTemplate : Entity, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }
    public Guid ContractorId { get; protected init; }
    public Guid LastMileId { get; protected init; }
    public virtual Guid SmsTemplateId { get; internal set; }
    public virtual TypeOrder TypeOrder { get; protected set; }
    public virtual NotificationEventType EventType { get; protected set; }

    protected LastMileSmsTemplate()
    {
    }

    public LastMileSmsTemplate(
        Guid? tenantId,
        Guid contractorId,
        Guid lastMileId,
        Guid smsTemplateId,
        TypeOrder typeOrder,
        NotificationEventType eventType)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        LastMileId = lastMileId;
        SmsTemplateId = smsTemplateId;
        TypeOrder = typeOrder;
        EventType = eventType;
    }


    public override object[] GetKeys()
    {
        return new object[] { LastMileId, TypeOrder, EventType };
    }
}