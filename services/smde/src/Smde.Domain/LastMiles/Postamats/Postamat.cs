using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Smde.LastMiles.Postamats.Printers;
using Smde.PackingPlaces;

#pragma warning disable 8618

namespace Smde.LastMiles.Postamats;

/// <summary>
/// Постамат
/// </summary>
public class Postamat : LastMile
{
    private readonly List<Cell> _cells = new();
    private readonly List<CellDisplay> _displays = new();
    private readonly List<ControllerBase> _controllers = new();

    public Guid DefaultCourierId { get; protected set; }
    
    /// <summary>
    /// Настройки
    /// </summary>
    public PostamatSettings Settings { get; set; } = new();

    /// <summary>
    /// Настройки сканера
    /// </summary>
    public PostamatScanner Scanner { get; set; } = new();

    /// <summary>
    /// Файловый принтер
    /// </summary>
    public FilePrinter FilePrinter { get; set; } = new();

    /// <summary>
    /// Сетевой принтер
    /// </summary>
    public NetworkPrinter NetworkPrinter { get; set; } = new();

    /// <summary>
    /// COM принтер
    /// </summary>
    public SerialPrinter SerialPrinter { get; set; } = new();

    /// <summary>
    /// Ячейки
    /// </summary>
    public CellsList Cells => new(_cells, this);

    /// <summary>
    /// Контроллеры
    /// </summary>
    public ControllersList Controllers => new(_controllers, this);

    /// <summary>
    /// Отображение
    /// </summary>
    public CellDisplaysList Displays => new(_displays, this);

    protected Postamat()
    {
    }

    internal Postamat(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid defaultCourierId,
        string name,
        string token,
        string address,
        string factoryNumber,
        string externalId)
        : base(id, tenantId, contractorId, name, token, address, factoryNumber, externalId)
    {
        DefaultCourierId = defaultCourierId;
    }

    public void AssignLockToCell(Guid cellId, Guid lockId)
    {
        var cell = Cells.GetById(cellId);
        var @lock = Controllers.GetLock(lockId);

        cell.LockId = @lock.Id;
    }

    internal void PutPackingPlace(PackingPlace packingPlace, Guid cellId)
    {
        var cell = Cells.GetById(cellId);

        var storagePeriod = StoragePeriods.FirstOrDefault(x => x.TypeOrder == packingPlace.TypeOrder);
        DateTime? storeUntil = null;

        if (storagePeriod is not null && storagePeriod.Period > 0)
        {
            storeUntil = DateTime.Now.AddHours(storagePeriod.Period);
        }
        
        cell.PutPackingPlace(packingPlace.Id, storeUntil);
    }

    internal void IssuePackingPlace(Guid cellId)
    {
        var cell = Cells.GetById(cellId);
        cell.IssuePackingPlace();
    }
}