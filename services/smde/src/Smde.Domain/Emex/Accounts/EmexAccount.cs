using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Emex.Accounts.EmexAccountConstants;

namespace Smde.Emex.Accounts;

/// <summary>
/// Emex аккаунт
/// </summary>
public class EmexAccount : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    public virtual Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    /// <summary>
    /// Наименование
    /// </summary>
    public virtual string Name { get; protected set; }

    /// <summary>
    /// Идентификатор оптовика в системе
    /// </summary>
    public virtual long UserId { get; internal set; }

    /// <summary>
    /// Пароль оптовика
    /// </summary>
    public virtual string Password { get; protected set; }

#pragma warning disable 8618
    protected EmexAccount()
    {
    }

    internal EmexAccount(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        string name,
        long userId,
        string password) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        SetName(name);
        UserId = userId;
        SetPassword(password);
    }
#pragma warning restore 8618

    public void SetPassword(string password)
    {
        Password = Check.NotNullOrWhiteSpace(
            password,
            nameof(password),
            MaxPasswordLenght);
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }
}