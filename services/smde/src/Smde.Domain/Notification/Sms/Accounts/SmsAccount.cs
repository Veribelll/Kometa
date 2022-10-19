using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Notification.Sms.Accounts.SmsAccountConstants;

#pragma warning disable 8618

namespace Smde.Notification.Sms.Accounts;

/// <summary>
/// Смс аккаунт
/// </summary>
public abstract class SmsAccount : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    /// <summary>
    /// Наименование аккаунта
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// Имя отправителя
    /// </summary>
    public string Sender { get; protected set; }

    protected SmsAccount()
    {
    }

    protected SmsAccount(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        string name,
        string sender) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        SetName(name);
        SetSender(sender);
    }

    public void SetSender(string sender)
    {
        Sender = Check.NotNullOrWhiteSpace(
            sender,
            nameof(sender),
            MaxSenderLenght);
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }
}