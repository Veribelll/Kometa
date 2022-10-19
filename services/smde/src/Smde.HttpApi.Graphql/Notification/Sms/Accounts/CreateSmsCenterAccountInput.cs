using System.ComponentModel.DataAnnotations;
using static Smde.Notification.Sms.Accounts.SmsCenterAccountConstants;

namespace Smde.Notification.Sms.Accounts;

public class CreateSmsCenterAccountInput : CreateOrUpdateSmsCenterAccountInputBase
{
    /// <summary>
    /// Пароль
    /// </summary>
    [Required]
    [StringLength(MaxPasswordLenght)]
    public string Password { get; set; } = default!;
}