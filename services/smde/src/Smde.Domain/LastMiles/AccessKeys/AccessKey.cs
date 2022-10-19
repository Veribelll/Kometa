using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;
using static Smde.LastMiles.AccessKeys.AccessKeyConstants;

#pragma warning disable CS8618

namespace Smde.LastMiles.AccessKeys;

public class AccessKey : Entity<Guid>, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }
    public Guid ContractorId { get; protected init; }

    public Guid LastMileId { get; protected set; }

    public Guid IdentityUserId { get; protected set; }

    /// <summary>
    /// Штрих код
    /// </summary>
    public string Barcode { get; protected set; }

    /// <summary>
    /// Истекает в
    /// </summary>
    public DateTime? ExpiresDt { get; internal set; }

    /// <summary>
    /// Последний вход
    /// </summary>
    public DateTime? LastEntrance { get; protected set; }

    /// <summary>
    /// Временный
    /// </summary>
    public bool IsDisposable { get; internal set; }

    protected AccessKey()
    {
    }

    internal AccessKey(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid lastMileId,
        Guid identityUserId,
        string barcode,
        DateTime? expiresDt = null,
        bool isDisposable = false) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        LastMileId = lastMileId;
        IdentityUserId = identityUserId;

        SetBarcode(barcode);

        ExpiresDt = expiresDt;
        IsDisposable = isDisposable;
    }

    internal void SetBarcode(string barcode)
    {
        Barcode = Check.NotNullOrWhiteSpace(
            barcode,
            nameof(barcode),
            MaxBarcodeLenght);
    }
}