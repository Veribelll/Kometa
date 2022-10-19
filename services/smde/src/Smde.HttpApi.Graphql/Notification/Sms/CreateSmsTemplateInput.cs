using System.ComponentModel.DataAnnotations;

namespace Smde.Notification.Sms;

/// <summary>
/// Смс шаблон
/// </summary>
public class CreateSmsTemplateInput: CreateOrUpdateSmsTemplateInputBase
{
    [Required]
    public NotificationEventType EventType { get; set; }
}