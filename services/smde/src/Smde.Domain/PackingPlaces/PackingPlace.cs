using Kometa.MultiContractor.Current;
using Smde.Orders;
using Smde.PackingPlaces.ReturnRequests;
using Smde.PackingPlaces.ShipmentRequests;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.PackingPlaces.PackingPlaceConstants;

#pragma warning disable 8618

namespace Smde.PackingPlaces;

public class PackingPlace : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    private readonly List<PackingPlaceStatusChangeHistory> _changesHistory = new();
    public Guid? TenantId { get; protected init; }
    public Guid ContractorId { get; protected init; }
    public TypeOrder TypeOrder { get; protected set; }
    public Guid? CustomerId { get; internal set; }
    public Guid? LastMileId { get; internal set; }
    public Guid? CourierId { get; internal set; }
    public Guid? ShipmentRequestId { get; protected set; }
    public Guid? ReturnRequestId { get; protected set; }
    public Guid? SizeId { get; protected set; }

    /// <summary>
    /// Статус упаковочного места
    /// </summary>
    public PackingPlaceStatus Status { get; protected set; }

    /// <summary>
    /// Штрих код
    /// </summary>
    public string Barcode { get; protected set; }

    /// <summary>
    /// Заблокировано от изменений
    /// </summary>
    public bool IsLocked { get; protected set; }

    /// <summary>
    /// История изменения статуса
    /// </summary>
    public IReadOnlyList<PackingPlaceStatusChangeHistory> ChangesHistory => _changesHistory;

    protected PackingPlace()
    {
    }

    internal PackingPlace(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        TypeOrder typeOrder,
        string barcode,
        Guid? lastMileId = null,
        Guid? courierId = null,
        Guid? sizeId = null) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        TypeOrder = typeOrder;
        Barcode = barcode;
        LastMileId = lastMileId;
        CourierId = courierId;
        SizeId = sizeId;
        Status = PackingPlaceStatus.Created;
        AddStatusToHistory();
    }

    public void Send()
    {
        CheckTransition(PackingPlaceStatus.Sent);
        CheckLastMileId();
        CheckCourierId();
        Status = PackingPlaceStatus.Sent;
        IsLocked = true;
        AddStatusToHistory();
        AddDistributedEvent(this.ToSendEto());
    }

    public void Accept()
    {
        CheckTransition(PackingPlaceStatus.Accepted);
        CheckLastMileId();
        CheckCourierId();
        Status = PackingPlaceStatus.Accepted;
        AddStatusToHistory();
        AddDistributedEvent(this.ToAcceptEto());
    }

    public void Issue()
    {
        CheckTransition(PackingPlaceStatus.Issued);
        CheckLastMileId();
        CheckCourierId();
        Status = PackingPlaceStatus.Issued;
        AddStatusToHistory();
        AddDistributedEvent(this.ToIssueEto());
    }

    public void Cancel()
    {
        CheckTransition(PackingPlaceStatus.Cancelled);
        Status = PackingPlaceStatus.Cancelled;
        AddStatusToHistory();
        AddDistributedEvent(this.ToCancelEto());
    }

    public void AssignShipmentRequest(ShipmentRequest request)
    {
        CheckLocked();
        CheckTransition(PackingPlaceStatus.InProcessSend);
        Status = PackingPlaceStatus.InProcessSend;
        ShipmentRequestId = request.Id;
        LastMileId = request.LastMileId;
        CourierId = request.CourierId;
        IsLocked = true;
        AddStatusToHistory();
        AddDistributedEvent(this.ToInProcessSendEto());
    }

    public virtual void AssignReturnRequest(ReturnRequest request)
    {
        CheckTransition(PackingPlaceStatus.InProcessReturn);
        ReturnRequestId = request.Id;
        Status = PackingPlaceStatus.InProcessReturn;
        IsLocked = true;
        AddStatusToHistory();
        AddDistributedEvent(this.ToInProcessReturnEto());
    }

    public PackingPlace SetLastMileId(Guid? lastMileId)
    {
        CheckLocked();

        if (ShipmentRequestId is not null)
        {
            throw new PackingPlaceShipmentRequestAssignedException(ShipmentRequestId.Value);
        }

        LastMileId = lastMileId;
        return this;
    }

    public PackingPlace SetSizeId(Guid? sizeId)
    {
        CheckLocked();
        SizeId = sizeId;
        return this;
    }

    internal void Return()
    {
        CheckTransition(PackingPlaceStatus.Returned);
        Status = PackingPlaceStatus.Returned;
        AddStatusToHistory();
        AddDistributedEvent(this.ToReturnEto());
    }

    internal void CancelShipmentRequest()
    {
        CheckTransition(PackingPlaceStatus.Created);
        Status = PackingPlaceStatus.Created;
        ShipmentRequestId = null;
        IsLocked = false;
        AddStatusToHistory();
    }

    internal void CancelReturnRequest()
    {
        var status = _changesHistory.OrderByDescending(x => x.CreationTime)
            .ToList()[1].Status;

        CheckTransition(status);
        Status = status;
        ReturnRequestId = null;
        AddStatusToHistory();
    }

    internal void SetBarcode(string barcode)
    {
        CheckLocked();

        Barcode = Check.NotNullOrWhiteSpace(
            barcode,
            nameof(barcode),
            MaxBarcodeLenght);
    }

    internal void SetCourierId(Guid? courierId)
    {
        CheckLocked();

        if (ShipmentRequestId is not null)
        {
            throw new PackingPlaceShipmentRequestAssignedException(ShipmentRequestId.Value);
        }

        CourierId = courierId;
    }

    private void CheckTransition(PackingPlaceStatus next)
    {
        if (!Status.CanTransitionTo(next))
        {
            throw new PackingPlaceIncorrectStatusException(Status, next);
        }
    }

    private void CheckLastMileId()
    {
        if (LastMileId is null)
        {
            throw new PackingPlaceLastMileIdIsNullException();
        }
    }

    private void CheckCourierId()
    {
        if (CourierId is null)
        {
            throw new PackingPlaceCourierIdIsNullException();
        }
    }

    private void CheckLocked()
    {
        if (IsLocked)
        {
            throw new PackingPlaceLockedException(Id);
        }
    }

    private void AddStatusToHistory()
    {
        _changesHistory.Add(new PackingPlaceStatusChangeHistory(TenantId, ContractorId, Id, Status));
    }
}