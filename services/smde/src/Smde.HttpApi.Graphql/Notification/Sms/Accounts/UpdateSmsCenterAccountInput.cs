using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Notification.Sms.Accounts;

public class UpdateSmsCenterAccountInput: CreateOrUpdateSmsCenterAccountInputBase
{
    [Required]
    [ID(nameof(SmsAccount))]
    public Guid Id { get; set; }
}