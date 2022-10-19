using Kometa.MultiContractor.Current;
using Smde.Orders;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.PackingPlaces.ShipmentRequests.ShipmentRequestConstants;

#pragma warning disable 8618

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequest : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    private readonly List<ShipmentRequestStatusChangeHistory> _changesHistory = new();

    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid LastMileId { get; protected set; }

    public Guid CourierId { get; set; }

    /// <summary>
    /// Статус заявки
    /// </summary>
    public ShipmentRequestStatus Status { get; protected set; }

    /// <summary>
    /// Код
    /// </summary>
    public string Code { get; protected set; }

    /// <summary>
    /// Причина
    /// </summary>
    public string? Cause { get; protected set; }

    /// <summary>
    /// Комментарий для курьера
    /// </summary>
    public string? Comment { get; protected set; }

    public bool IsLocked { get; protected set; }

    public IReadOnlyList<ShipmentRequestStatusChangeHistory> ChangesHistory => _changesHistory;

    protected ShipmentRequest()
    {
    }

    internal ShipmentRequest(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid lastMileId,
        Guid courierId,
        string code,
        string? cause = null,
        string? comment = null) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        LastMileId = lastMileId;
        CourierId = courierId;

        SetCode(code);
        SetCause(cause);
        SetComment(comment);

        Status = ShipmentRequestStatus.Created;
        AddStatusToHistory();
    }

    public void SetCause(string? cause)
    {
        CheckLocked();
        Cause = Check.Length(
            cause,
            nameof(cause),
            MaxCauseLenght);
    }

    public void SetComment(string? comment)
    {
        Comment = Check.Length(
            comment,
            nameof(comment),
            MaxCommentLenght);
    }

    internal void SetCode(string code)
    {
        CheckLocked();
        Code = Check.NotNullOrWhiteSpace(
            code,
            nameof(code),
            MaxCodeLenght);
    }

    internal void Send()
    {
        CheckTransition(ShipmentRequestStatus.Sent);
        Status = ShipmentRequestStatus.Sent;
        AddStatusToHistory();
        IsLocked = true;
    }

    internal void Accept()
    {
        CheckTransition(ShipmentRequestStatus.Accepted);
        Status = ShipmentRequestStatus.Accepted;
        AddStatusToHistory();
    }

    internal void PartiallyAccept()
    {
        CheckTransition(ShipmentRequestStatus.PartiallyAccepted);
        Status = ShipmentRequestStatus.PartiallyAccepted;
        AddStatusToHistory();
    }

    internal void Cancel()
    {
        CheckTransition(ShipmentRequestStatus.Canceled);
        Status = ShipmentRequestStatus.Canceled;
        AddStatusToHistory();
    }

    private void CheckTransition(ShipmentRequestStatus next)
    {
        if (!Status.CanTransitionTo(next))
        {
            throw new ShipmentRequestIncorrectStatusException(Status, next);
        }
    }

    private void CheckLocked()
    {
        if (IsLocked)
        {
            throw new ShipmentRequestLockedException(Id);
        }
    }

    private void AddStatusToHistory()
    {
        _changesHistory.Add(new ShipmentRequestStatusChangeHistory(TenantId, ContractorId, Id, Status));
    }
}