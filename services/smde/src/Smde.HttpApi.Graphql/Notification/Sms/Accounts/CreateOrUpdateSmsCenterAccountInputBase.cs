using System.ComponentModel.DataAnnotations;
using static Smde.Notification.Sms.Accounts.SmsCenterAccountConstants;

namespace Smde.Notification.Sms.Accounts;

public abstract class CreateOrUpdateSmsCenterAccountInputBase: CreateOrUpdateSmsAccountInputBase
{
    /// <summary>
    /// Логин
    /// </summary>
    [Required]
    [StringLength(MaxLoginLenght)]
    public string Login { get; set; } = default!;
}