using Kometa.MultiContractor.Current;
using Smde.LastMiles.AccessKeys;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.LastMiles.LastMileConstants;

#pragma warning disable 8618

namespace Smde.LastMiles;

/// <summary>
/// Последняя миля
/// </summary>
public abstract class LastMile : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    private readonly List<AccessKey> _accessKeys = new();
    private readonly List<LastMileStoragePeriod> _storagePeriods = new();
    private readonly List<LastMileReturnPeriod> _returnPeriods = new();
    private readonly List<LastMileSmsTemplate> _smsTemplates = new();

    public Guid? TenantId { get; protected set; }

    public Guid ContractorId { get; protected set; }

    /// <summary>
    /// Статус
    /// </summary>
    public LastMileStatus Status { get; protected set; }

    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// Код доступа
    /// </summary>
    public string Token { get; protected set; }

    /// <summary>
    /// Адрес
    /// </summary>
    public string Address { get; protected set; }

    /// <summary>
    /// Заводской номер
    /// </summary>
    public string FactoryNumber { get; protected set; }

    /// <summary>
    /// Внешний ID
    /// </summary>
    public string ExternalId { get; protected set; }

    /// <summary>
    /// Ид аккаунтов
    /// </summary>
    public LastMileAccountIds AccountIds { get; set; } = new();

    /// <summary>
    /// Ключи доступа 
    /// </summary>
    public AccessKeysList AccessKeys => new(_accessKeys, this);

    /// <summary>
    /// Сроки хранения заказов
    /// </summary>
    public LastMileStoragePeriodsList StoragePeriods => new(_storagePeriods, this);

    /// <summary>
    /// Сроки возврата заказов
    /// </summary>
    public LastMileReturnPeriodsList ReturnPeriods => new(_returnPeriods, this);

    /// <summary>
    /// Смс шаблоны
    /// </summary>
    public LastMileSmsTemplatesList SmsTemplates => new(_smsTemplates, this);

    protected LastMile()
    {
    }

    protected LastMile(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        string name,
        string token,
        string address,
        string factoryNumber,
        string externalId) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        SetName(name);
        SetToken(token);
        SetAddress(address);
        SetFactoryNumber(factoryNumber);
        SetExternalId(externalId);
        Status = LastMileStatus.Deactivated;
    }

    public void SetAddress(string address)
    {
        Address = Check.NotNullOrWhiteSpace(
            address,
            nameof(address),
            MaxAddressLenght);
    }

    public void Activate()
    {
        Status = LastMileStatus.Activated;
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }

    internal void SetFactoryNumber(string factoryNumber)
    {
        FactoryNumber = Check.NotNullOrWhiteSpace(
            factoryNumber,
            nameof(factoryNumber),
            MaxFactoryNumberLenght);
    }

    internal void SetExternalId(string externalId)
    {
        ExternalId = Check.NotNullOrWhiteSpace(
            externalId,
            nameof(externalId),
            MaxExternalIdLenght);
    }

    internal void SetToken(string token)
    {
        Token = Check.NotNullOrWhiteSpace(token, nameof(token));
    }
}