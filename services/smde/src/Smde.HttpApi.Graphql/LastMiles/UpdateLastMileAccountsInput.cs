using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Emex.Accounts;
using Smde.Notification.Sms.Accounts;

namespace Smde.LastMiles;

public class UpdateLastMileAccountsInput
{
    [Required]
    [ID(nameof(LastMile))]
    public Guid LastMileId { get; set; }

    [ID(nameof(EmexAccount))]
    public Guid? EmexAccountId { get; set; }

    [ID(nameof(SmsAccount))]
    public Guid? SmsAccountId { get; set; }
}