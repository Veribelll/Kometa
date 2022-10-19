using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Notification.Sms.SmsMessageConstants;

#pragma warning disable 8618

namespace Smde.Notification.Sms;

public class SmsMessage : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid AccountId { get; protected set; }

    /// <summary>
    /// Успешно ли отправлено
    /// </summary>
    public bool IsSuccess { get; protected set; }

    /// <summary>
    /// Номер телефона
    /// </summary>
    public string PhoneNumber { get; protected set; }

    /// <summary>
    /// Текст
    /// </summary>
    public string Text { get; protected set; }

    /// <summary>
    /// Время когда было отправлено
    /// </summary>
    public DateTime? TimeDispatch { get; protected set; }

    /// <summary>
    /// Ошибка при отправке
    /// </summary>
    public string? Error { get; protected set; }

    protected SmsMessage()
    {
    }

    internal SmsMessage(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid accountId,
        string phoneNumber,
        string text) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        AccountId = accountId;

        PhoneNumber = Check.NotNullOrWhiteSpace(
            phoneNumber,
            nameof(phoneNumber),
            MaxPhoneNumberLenght,
            MinPhoneNumberLenght);

        Text = Check.Length(
            text,
            nameof(text),
            MaxTextLenght);
    }

    public void Send(bool isSuccess, string? error = null)
    {
        if (IsSuccess)
        {
            return;
        }

        IsSuccess = isSuccess;
        Error = error;
        TimeDispatch = DateTime.Now;
    }
}