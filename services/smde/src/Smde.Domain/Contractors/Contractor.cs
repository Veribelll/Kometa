using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Contractors.ContractorConstants;

namespace Smde.Contractors;

/// <summary>
/// Контрагент
/// </summary>
public abstract class Contractor : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; protected init; }
    
    public bool IsHost { get; protected init; }

    /// <summary>
    /// Реквизиты банковского счета
    /// </summary>
    public AccountBank AccountBank { get; set; }

    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// ИНН - Индивидуальный номер налогоплательщика
    /// </summary>
    public string Inn { get; protected set; }

    /// <summary>
    /// Код ОКПО - Код в Общероссийском классификаторе предприятий и организаций
    /// </summary>
    public string? Okpo { get; protected set; }

    /// <summary>
    /// Адрес
    /// </summary>
    public string Address { get; protected set; }

    /// <summary>
    /// Фактический адрес
    /// </summary>
    public string? ActualAddress { get; protected set; }

    /// <summary>
    /// Почтовый адрес
    /// </summary>
    public string? MailingAddress { get; protected set; }

#pragma warning disable 8618
    protected Contractor()
    {
    }

    protected Contractor(
        Guid id,
        Guid? tenantId,
        AccountBank accountBank,
        string name,
        string inn,
        string address,
        string? okpo = null,
        string? actualAddress = null,
        string? mailingAddress = null,
        bool isHost = false) : base(id)
    {
        AccountBank = accountBank;
        TenantId = tenantId;
        SetName(name);
        SetInn(inn);
        SetAddress(address);
        SetOkpo(okpo);
        SetActualAddress(actualAddress);
        SetMailingAddress(mailingAddress);
        IsHost = isHost;
    }
#pragma warning restore 8618
        
    public void SetAddress(string address)
    {
        Address = Check.NotNullOrWhiteSpace(
            address,
            nameof(address),
            MaxAddressLenght);
    }

    public void SetActualAddress(string? actualAddress)
    {
        ActualAddress = Check.Length(
            actualAddress,
            nameof(actualAddress),
            MaxAddressLenght);
    }

    public void SetMailingAddress(string? mailingAddress)
    {
        MailingAddress = Check.Length(
            mailingAddress,
            nameof(mailingAddress),
            MaxAddressLenght);
    }
        
    public abstract void SetOkpo(string? okpo);

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }
        
    internal abstract void SetInn(string inn);
        
}