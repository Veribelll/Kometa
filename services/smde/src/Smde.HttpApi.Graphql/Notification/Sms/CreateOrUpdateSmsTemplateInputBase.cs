using System.ComponentModel.DataAnnotations;
using static Smde.Notification.Sms.SmsTemplateConstants;

namespace Smde.Notification.Sms;

/// <summary>
/// Смс шаблон
/// </summary>
public abstract class CreateOrUpdateSmsTemplateInputBase
{
    /// <summary>
    /// Наименование шаблона
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;

    /// <summary>
    /// Шаблон
    /// </summary>
    [Required]
    [StringLength(MaxTemplateLenght)]
    public string Template { get; set; } = default!;

    /// <summary>
    /// Комментарий
    /// </summary>
    [StringLength(MaxTemplateLenght)]
    public string? Comment { get; set; }
}