using System.Collections;
using Smde.Notification;
using Smde.Orders;

namespace Smde.LastMiles;

public class LastMileSmsTemplatesList : IReadOnlyList<LastMileSmsTemplate>
{
    protected readonly List<LastMileSmsTemplate> Items;
    protected readonly LastMile LastMile;

    internal LastMileSmsTemplatesList(List<LastMileSmsTemplate> items, LastMile lastMile)
    {
        Items = items;
        LastMile = lastMile;
    }

    public LastMileSmsTemplate Get(TypeOrder typeOrder, NotificationEventType eventType) => 
        Items.First(x => x.TypeOrder == typeOrder && x.EventType == eventType);

    public LastMileSmsTemplate AddOrUpdate(Guid smsTemplateId, TypeOrder typeOrder, NotificationEventType eventType)
    {
        var template = Items.FirstOrDefault(x => x.TypeOrder == typeOrder && x.EventType == eventType);

        if (template is not null)
        {
            template.SmsTemplateId = smsTemplateId;
            return template;
        }

        template = new LastMileSmsTemplate(
            LastMile.TenantId,
            LastMile.ContractorId,
            LastMile.Id,
            smsTemplateId,
            typeOrder,
            eventType);
        
        Items.Add(template);

        return template;
    }

    public LastMileSmsTemplate Remove(TypeOrder typeOrder, NotificationEventType eventType)
    {
        var template = Get(typeOrder, eventType);
        Items.Remove(template);
        return template;
    }

    public void Clear() => Items.Clear();

    public int Count => Items.Count;
    public LastMileSmsTemplate this[int index] => Items[index];
    public IEnumerator<LastMileSmsTemplate> GetEnumerator() => Items.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}