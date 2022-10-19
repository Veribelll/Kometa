using Kometa.MultiContractor.Current;
using Smde.Orders;
using Smde.PackingPlaces;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.LastMiles.Postamats.Cells.CellConstants;

#pragma warning disable 8618

namespace Smde.LastMiles.Postamats.Cells;

/// <summary>
/// Ячейка
/// </summary>
public class Cell : FullAuditedEntity<Guid>, IMultiTenant, IMultiContractor
{
    private readonly List<PlaceInCell> _places = new();

    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid PostamatId { get; protected init; }

    public Guid? LockId { get; internal set; }

    public Guid? SizeId { get; internal set; }

    /// <summary>
    /// Тип ячейки
    /// </summary>
    public TypeCell Type { get; protected init; }

    /// <summary>
    /// Статус
    /// </summary>
    public CellStatus Status { get; protected set; }

    /// <summary>
    /// Наименование
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// ШК
    /// </summary>
    public string Barcode { get; protected set; }

    /// <summary>
    /// Пин-код
    /// </summary>
    public string? PinCode { get; protected set; }

    /// <summary>
    /// Активирована
    /// </summary>
    public bool IsEnable { get; internal set; }

    /// <summary>
    /// Приоритет использования
    /// </summary>
    public int Priority { get; internal set; }

    /// <summary>
    /// Сервисный пин-код
    /// </summary>
    public string? ServicePinCode { get; protected set; }

    /// <summary>
    /// Места в ячейке
    /// </summary>
    public IReadOnlyList<PlaceInCell> Places => _places;

    protected Cell()
    {
    }

    internal Cell(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid postamatId,
        TypeCell typeCell,
        string name,
        string barcode) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        PostamatId = postamatId;
        Type = typeCell;
        SetName(name);
        SetBarcode(barcode);
        IsEnable = true;
        Priority = 0;
    }

    internal void ReservePackingPlace(Guid packingPlaceId, TypeOrder typeOrder, Guid customerId)
    {
        /*if (Places.Any(x => x.TypeOrder != typeOrder))
        {
            //throw new BusinessException(CellErrorCodes.IncorrectTypeOrder);
        }

        if (Places.Any(x => x.CustomerId != customerId))
        {
            //throw new BusinessException(CellErrorCodes.IncorrectCustomerId);
        }

        if (Places.Any(x => x.PackingPlaceId == packingPlaceId))
        {
            //throw new BusinessException(CellErrorCodes.PackingPlaceAlreadyExists);
        }

        _places.Add(new PlaceInCell(TenantId, ContractorId, Id, packingPlaceId, typeOrder, customerId, true));*/
    }

    internal void PutPackingPlace(Guid packingPlaceId, DateTime? storeUntil = null)
    {
        var place = Places.FirstOrDefault(x => x.PackingPlaceId == packingPlaceId);
        if (place is not null)
        {
            place.Put();
        }
        else
        {
            _places.Add(new PlaceInCell(TenantId, ContractorId, Id, packingPlaceId, false));
        }

        SetPinCode(Random.Shared.Next(111111, 999999).ToString());
        Status = CellStatus.Busy;
    }

    internal void IssuePackingPlace()
    {
        _places.Clear();
        PinCode = null;
        Status = CellStatus.Free;
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }

    internal void SetBarcode(string barcode)
    {
        Barcode = Check.NotNullOrWhiteSpace(
            barcode,
            nameof(barcode),
            MaxBarcodeLenght);
    }

    internal void SetPinCode(string? pinCode)
    {
        PinCode = Check.Length(
            pinCode,
            nameof(pinCode),
            MaxPinCodeLenght);
    }

    internal void SetServicePinCode(string? servicePinCode)
    {
        ServicePinCode = Check.Length(
            servicePinCode,
            nameof(servicePinCode),
            MaxServicePinCodeLenght);
    }
}