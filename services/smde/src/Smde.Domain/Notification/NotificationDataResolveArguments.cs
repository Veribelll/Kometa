using Smde.Orders;

namespace Smde.Notification;

public class NotificationDataResolveArguments
{
    public Guid? LastMileId { get; set; }
    public Guid PackingPlaceId { get; set; }
    public Guid? CustomerId { get; set; }
    public TypeOrder TypeOrder { get; set; }
    public NotificationEventType EventType { get; set; }

    public NotificationDataResolveArguments(
        Guid? lastMileId,
        Guid packingPlaceId, 
        Guid? customerId,
        TypeOrder typeOrder, 
        NotificationEventType eventType)
    {
        LastMileId = lastMileId;
        PackingPlaceId = packingPlaceId;
        CustomerId = customerId;
        TypeOrder = typeOrder;
        EventType = eventType;
    }
}