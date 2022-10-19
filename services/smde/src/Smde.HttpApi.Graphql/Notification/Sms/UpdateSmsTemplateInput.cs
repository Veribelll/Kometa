using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Notification.Sms;

/// <summary>
/// Смс шаблон
/// </summary>
public class UpdateSmsTemplateInput: CreateOrUpdateSmsTemplateInputBase
{
    [Required] 
    [ID(nameof(SmsTemplate))] 
    public Guid Id { get; set; }
}