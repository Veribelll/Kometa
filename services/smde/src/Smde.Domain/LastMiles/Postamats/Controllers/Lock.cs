using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;
using static Smde.LastMiles.Postamats.Controllers.LockConstants;

#pragma warning disable 8618

namespace Smde.LastMiles.Postamats.Controllers;

/// <summary>
/// Замок
/// </summary>
public class Lock : Entity<Guid>, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected set; }

    public Guid ContractorId { get; protected set; }

    public Guid ControllerId { get; protected set; }

    /// <summary>
    /// Адрес
    /// </summary>
    public string Address { get; protected set; }

    protected Lock()
    {

    }

    internal Lock(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid controllerId,
        string address) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        ControllerId = controllerId;

        Address = Check.NotNullOrWhiteSpace(
            address,
            nameof(address),
            MaxAddressLenght);
    }
}