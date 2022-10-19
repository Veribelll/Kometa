using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;
using Volo.Abp.MultiTenancy;
using static Smde.LastMiles.Postamats.Controllers.BaseControllerConstants;

namespace Smde.LastMiles.Postamats.Controllers;

/// <summary>
/// Контроллер
/// </summary>
public abstract class ControllerBase : Entity<Guid>, IMultiTenant, IMultiContractor
{
    private readonly List<Lock> _locks = new();

    public Guid? TenantId { get; protected set; }

    public Guid ContractorId { get; protected set; }

    public Guid PostamatId { get; protected set; }

    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// Настройки serial port
    /// </summary>
    public SerialPortSettings Settings { get; internal set; }

    /// <summary>
    /// Замки
    /// </summary>
    public IReadOnlyList<Lock> Locks => _locks;

#pragma warning disable 8618
    protected ControllerBase()
    {
    }

    protected ControllerBase(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid postamatId,
        string name,
        SerialPortSettings settings) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        PostamatId = postamatId;
        SetName(name);
        Settings = Check.NotNull(settings, nameof(settings));
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }

    internal void ClearLocks()
    {
        _locks.Clear();
    }

    protected void AddLock(IGuidGenerator guidGenerator, string address)
    {
        _locks.Add(new Lock(guidGenerator.Create(), TenantId, ContractorId, Id, address));
    }
}