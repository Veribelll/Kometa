using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Notification.Sms.SmsTemplateConstants;

#pragma warning disable 8618

namespace Smde.Notification.Sms;

/// <summary>
/// Смс шаблон
/// </summary>
public class SmsTemplate : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public NotificationEventType EventType { get; protected set; }

    /// <summary>
    /// Наименование шаблона
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// Шаблон
    /// </summary>
    public string Template { get; protected set; }

    /// <summary>
    /// Комментарий
    /// </summary>
    public string? Comment { get; protected set; }

    protected SmsTemplate()
    {
    }

    internal SmsTemplate(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        NotificationEventType eventType,
        string name,
        string template,
        string? comment = null) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        EventType = eventType;
        SetName(name);
        SetTemplate(template);
        SetComment(comment);
    }

    public void SetTemplate(string template)
    {
        Template = Check.NotNullOrWhiteSpace(
            template,
            nameof(template),
            MaxTemplateLenght);
    }

    public void SetComment(string? comment)
    {
        Comment = Check.Length(
            comment,
            nameof(comment),
            MaxCommentLenght);
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }
}