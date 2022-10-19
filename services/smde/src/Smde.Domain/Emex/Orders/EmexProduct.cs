using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Emex.Orders.EmexProductConstants;

namespace Smde.Emex.Orders;

/// <summary>
/// Товар Emex
/// </summary>
public class EmexProduct : FullAuditedEntity<Guid>, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid OrderId { get; protected init; }

    /// <summary>
    /// Ид упаковочного места
    /// </summary>
    public Guid? PackingPlaceId { get; protected set; }

    public EmexProductStatus Status { get; internal set; }

    /// <summary>
    /// Тип баланса
    /// </summary>
    public EmexTypeBalance TypeBalance { get; protected set; }

    /// <summary>
    /// Тип оплаты
    /// </summary>
    public EmexTypePayment TypePayment { get; protected set; }

    /// <summary>
    /// Штрих код
    /// </summary>
    public string? Barcode { get; protected set; }

    /// <summary>
    /// Название
    /// </summary>
    public string Name { get; protected set; }

    /// <summary>
    /// Артикул
    /// </summary>
    public string VendorCode { get; protected set; }

    /// <summary>
    /// Производитель
    /// </summary>
    public string Manufacturer { get; protected set; }

    /// <summary>
    /// Кол-во
    /// </summary>
    public decimal Quantity { get; protected set; }

    /// <summary>
    /// Цена 
    /// </summary>
    public decimal Price { get; protected set; }

    /// <summary>
    /// Ставка НДС
    /// </summary>
    public decimal Vat { get; protected set; }

    /// <summary>
    /// Сумма
    /// </summary>
    public decimal Sum { get; protected set; }

    /// <summary>
    /// Страна производитель
    /// </summary>
    public string? ManufacturerCountry { get; protected set; }

    /// <summary>
    /// Код страны производителя
    /// </summary>
    public string? ManufacturerCountryCode { get; protected set; }

    /// <summary>
    /// Маркировка
    /// </summary>
    public string? Marking { get; protected set; }

    /// <summary>
    /// Грузотаможенная декларация
    /// </summary>
    public string? Gtd { get; protected set; }

    public bool IsLocked { get; protected set; }

#pragma warning disable 8618
    protected EmexProduct()
    {
    }

    internal EmexProduct(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid orderId,
        EmexTypeBalance typeBalance,
        EmexTypePayment typePayment,
        string? barcode,
        string vendorCode,
        string manufacturer,
        string name,
        decimal quantity,
        decimal price,
        decimal vat,
        decimal sum,
        string? manufacturerCountry = null,
        string? manufacturerCountryCode = null,
        string? marking = null,
        string? gtd = null) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        OrderId = orderId;
        Status = EmexProductStatus.Created;
        TypeBalance = typeBalance;
        TypePayment = typePayment;
        SetBarcode(barcode);
        SetName(name);
        SetVendorCode(vendorCode);
        SetManufacturer(manufacturer);
        SetQuantity(quantity);
        SetPrice(price);
        SetVat(vat);
        SetSum(sum);
        SetManufacturerCountry(manufacturerCountry);
        SetManufacturerCountryCode(manufacturerCountryCode);
        SetMarking(marking);
        SetGtd(gtd);
    }
#pragma warning restore 8618

    internal EmexProduct SetPackingPlaceId(Guid? packingPlaceId)
    {
        CheckLocked();
        PackingPlaceId = packingPlaceId;
        return this;
    }

    internal EmexProduct SetTypeBalance(EmexTypeBalance typeBalance)
    {
        CheckLocked();
        TypeBalance = typeBalance;
        return this;
    }

    internal EmexProduct SetTypePayment(EmexTypePayment typePayment)
    {
        CheckLocked();
        TypePayment = typePayment;
        return this;
    }

    internal EmexProduct SetBarcode(string? barcode)
    {
        CheckLocked();
        Barcode = Check.Length(
            barcode,
            nameof(barcode),
            MaxBarcodeLenght);
        return this;
    }

    internal EmexProduct SetName(string name)
    {
        CheckLocked();
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
        return this;
    }

    internal EmexProduct SetVendorCode(string vendorCode)
    {
        CheckLocked();
        VendorCode = Check.NotNullOrWhiteSpace(
            vendorCode,
            nameof(vendorCode),
            MaxVendorCodeLenght);
        return this;
    }

    internal EmexProduct SetManufacturer(string manufacturer)
    {
        CheckLocked();
        Manufacturer = Check.NotNullOrWhiteSpace(
            manufacturer,
            nameof(manufacturer),
            MaxManufacturerLenght);
        return this;
    }

    internal EmexProduct SetQuantity(decimal quantity)
    {
        CheckLocked();
        if (quantity <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(quantity));
        }

        Quantity = quantity;
        return this;
    }

    internal EmexProduct SetPrice(decimal price)
    {
        CheckLocked();
        if (price < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(price));
        }

        Price = price;
        return this;
    }

    internal EmexProduct SetVat(decimal vat)
    {
        CheckLocked();
        if (vat < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(vat));
        }

        Vat = vat;
        return this;
    }

    internal EmexProduct SetSum(decimal sum)
    {
        CheckLocked();
        if (sum < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(sum));
        }

        Sum = sum;
        return this;
    }

    internal EmexProduct SetManufacturerCountry(string? manufacturerCountry)
    {
        CheckLocked();
        ManufacturerCountry = Check.Length(
            manufacturerCountry,
            nameof(manufacturerCountry),
            MaxManufacturerCountryLenght);
        return this;
    }

    internal EmexProduct SetManufacturerCountryCode(string? manufacturerCountryCode)
    {
        CheckLocked();
        ManufacturerCountryCode = Check.Length(
            manufacturerCountryCode,
            nameof(manufacturerCountryCode),
            MaxManufacturerCountryCodeLenght);
        return this;
    }

    internal EmexProduct SetMarking(string? marking)
    {
        CheckLocked();
        Marking = Check.Length(
            marking,
            nameof(marking),
            MaxMarkingLenght);
        return this;
    }

    internal EmexProduct SetGtd(string? gtd)
    {
        CheckLocked();
        Gtd = Check.Length(
            gtd,
            nameof(gtd),
            MaxGtdLenght);
        return this;
    }

    internal void Lock()
    {
        IsLocked = true;
    }

    private void CheckLocked()
    {
        if (IsLocked)
        {
            throw new EmexProductLockedException(Id);
        }
    }
}