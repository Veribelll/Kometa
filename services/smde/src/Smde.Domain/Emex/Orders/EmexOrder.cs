using Kometa.MultiContractor.Current;
using Smde.Orders;
using Smde.PackingPlaces;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

#pragma warning disable 8618

namespace Smde.Emex.Orders;

/// <summary>
/// Заказ Emex
/// </summary>
[Audited]
public class EmexOrder : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    private readonly List<EmexProduct> _products = new();

    public Guid? TenantId { get; protected init; }
    public Guid ContractorId { get; protected init; }
    public Guid CustomerId { get; protected set; }

    public EmexOrderStatus Status { get; internal set; }

    /// <summary>
    /// Идентификатор движения Emex 
    /// </summary>
    public long GlobalId { get; protected set; }

    public string ExternalId { get; protected set; }
    public bool IsLocked { get; protected set; }
    public IReadOnlyList<EmexProduct> Products => _products.AsReadOnly();

    protected EmexOrder()
    {
    }

    internal EmexOrder(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid customerId,
        long globalId,
        string externalId) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        CustomerId = customerId;
        Status = EmexOrderStatus.Created;
        SetGlobalId(globalId);
        SetExternalId(externalId);
    }

    public EmexProduct GetProduct(Guid productId) => _products.First(x => x.Id == productId);

    public EmexProduct AddProduct(Guid productId, CreateEmexProduct input)
    {
        CheckLocked();

        var product = new EmexProduct(
            productId,
            TenantId,
            ContractorId,
            Id,
            input.TypeBalance,
            input.TypePayment,
            input.Barcode,
            input.VendorCode,
            input.Manufacturer,
            input.Name,
            input.Quantity,
            input.Price,
            input.Vat,
            input.Sum,
            input.ManufacturerCountry,
            input.ManufacturerCountryCode,
            input.Marking,
            input.Gtd);

        _products.Add(product);

        return product;
    }

    public EmexProduct UpdateProduct(Guid productId, UpdateEmexProduct input)
    {
        CheckLocked();

        var product = GetProduct(productId);

        product
            .SetTypeBalance(input.TypeBalance)
            .SetTypePayment(input.TypePayment)
            .SetBarcode(input.Barcode)
            .SetVendorCode(input.VendorCode)
            .SetManufacturer(input.Manufacturer)
            .SetName(input.Name)
            .SetQuantity(input.Quantity)
            .SetPrice(input.Price)
            .SetVat(input.Vat)
            .SetSum(input.Sum)
            .SetManufacturerCountry(input.ManufacturerCountry)
            .SetManufacturerCountryCode(input.ManufacturerCountryCode)
            .SetMarking(input.Marking)
            .SetGtd(input.Gtd);

        return product;
    }

    public EmexProduct DeleteProduct(Guid productId)
    {
        CheckLocked();
        var product = GetProduct(productId);
        _products.Remove(product);
        return product;
    }

    public void ClearProducts()
    {
        CheckLocked();
        _products.Clear();
    }

    public EmexProduct AssignToPackingPlace(PackingPlace packingPlace, Guid productId)
    {
        var product = GetProduct(productId);

        if (product.PackingPlaceId == packingPlace.Id)
        {
            return product;
        }

        if (packingPlace.IsLocked)
        {
            throw new PackingPlaceLockedException(packingPlace.Id);
        }

        if (packingPlace.TypeOrder != TypeOrder.Emex)
        {
            throw new TypeOrderIsNotCorrectException(TypeOrder.Emex, packingPlace.TypeOrder);
        }

        if (packingPlace.CustomerId is not null && packingPlace.CustomerId != CustomerId)
        {
            throw new EmexOrderCustomerIdIsNotEqualException(CustomerId, packingPlace.CustomerId, packingPlace.Id);
        }

        packingPlace.CustomerId = CustomerId;

        product.SetPackingPlaceId(packingPlace.Id);
        return product;
    }

    public void SetCustomerId(Guid customerId)
    {
        CheckLocked();
        CustomerId = customerId;
    }

    internal void Send(Guid packingPlaceId)
    {
        var products = _products.Where(x => x.PackingPlaceId == packingPlaceId)
            .ToList();

        foreach (var product in products)
        {
            product.Status = EmexProductStatus.Sent;
        }

        if (_products.All(x => x.Status == EmexProductStatus.Sent))
        {
            Status = EmexOrderStatus.Sent;
        }
        else if (Status == EmexOrderStatus.Created)
        {
            Status = EmexOrderStatus.PartiallySent;
        }

    }

    internal void Accept(Guid packingPlaceId)
    {
        var products = _products.Where(x => x.PackingPlaceId == packingPlaceId)
            .ToList();

        foreach (var product in products)
        {
            product.Status = EmexProductStatus.Accepted;
        }

        if (_products.All(x => x.Status == EmexProductStatus.Accepted))
        {
            Status = EmexOrderStatus.Accepted;
        }
        else if (Status <= EmexOrderStatus.Sent)
        {
            Status = EmexOrderStatus.PartiallyAccepted;
        }
    }

    internal void Issue(Guid packingPlaceId)
    {
        var products = _products.Where(x => x.PackingPlaceId == packingPlaceId)
            .ToList();

        foreach (var product in products)
        {
            product.Status = EmexProductStatus.Issued;
        }

        if (_products.All(x => x.Status == EmexProductStatus.Issued))
        {
            Status = EmexOrderStatus.Issued;
        }
        else if (Status <= EmexOrderStatus.Accepted)
        {
            Status = EmexOrderStatus.PartiallyIssued;
        }
    }

    internal void Return(Guid packingPlaceId)
    {
        var products = _products.Where(x => x.PackingPlaceId == packingPlaceId)
            .ToList();

        foreach (var product in products)
        {
            product.Status = EmexProductStatus.Return;
        }

        if (_products.All(x => x.Status == EmexProductStatus.Return))
        {
            Status = EmexOrderStatus.Return;
        }
    }

    internal void RemovePackingPlace(Guid packingPlaceId)
    {
        var products = _products.Where(x => x.PackingPlaceId == packingPlaceId).ToList();

        foreach (var product in products)
        {
            product.SetPackingPlaceId(null);
        }
    }

    public void SetGlobalId(long globalId)
    {
        CheckLocked();
        GlobalId = globalId;
    }

    internal void SetExternalId(string externalId)
    {
        CheckLocked();
        ExternalId = externalId;
    }

    internal void Lock()
    {
        IsLocked = true;
        foreach (var product in _products)
        {
            product.Lock();
        }
    }

    private void CheckLocked()
    {
        if (IsLocked)
        {
            throw new EmexOrderLockedException(Id);
        }
    }
}