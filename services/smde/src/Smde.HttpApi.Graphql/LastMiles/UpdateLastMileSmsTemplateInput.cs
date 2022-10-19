using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Notification;
using Smde.Notification.Sms;
using Smde.Orders;

namespace Smde.LastMiles;

public class UpdateLastMileSmsTemplateInput
{
    [Required]
    [ID(nameof(LastMile))] 
    public Guid LastMileId { get; set; }
    
    [Required]
    [ID(nameof(SmsTemplate))]
    public Guid SmsTemplateId { get; set; }

    [Required]
    public TypeOrder TypeOrder { get; set; } = default!;
    
    [Required]
    public NotificationEventType EventType { get; set; }
}