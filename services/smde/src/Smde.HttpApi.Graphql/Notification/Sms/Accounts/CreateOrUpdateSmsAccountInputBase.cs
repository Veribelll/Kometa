using System.ComponentModel.DataAnnotations;
using static Smde.Notification.Sms.Accounts.SmsAccountConstants;

namespace Smde.Notification.Sms.Accounts;

public abstract class CreateOrUpdateSmsAccountInputBase
{
    /// <summary>
    /// Наименование аккаунта
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    /// <summary>
    /// Имя отправителя
    /// </summary>
    [Required]
    [StringLength(MaxSenderLenght)]
    public string Sender { get; set; } = default!;
}