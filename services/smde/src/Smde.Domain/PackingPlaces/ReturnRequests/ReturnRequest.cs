using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.PackingPlaces.ReturnRequests.ReturnRequestConstants;

#pragma warning disable 8618

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequest : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    private readonly List<ReturnRequestStatusChangeHistory> _changesHistory = new();

    public Guid? TenantId { get; protected init; }

    public Guid ContractorId { get; protected init; }

    public Guid CourierId { get; set; }

    public Guid? AtCourierId { get; protected init; }

    public Guid? AtLastMileId { get; protected init; }

    /// <summary>
    /// Статус заявки
    /// </summary>
    public ReturnRequestStatus Status { get; protected set; }

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

    public IReadOnlyCollection<ReturnRequestStatusChangeHistory> ChangesHistory => _changesHistory.AsReadOnly();

    protected ReturnRequest()
    {
    }

    internal ReturnRequest(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid courierId,
        string code,
        Guid? atCourierId = null,
        Guid? atLastMileId = null,
        string? cause = null,
        string? comment = null) : base(id)
    {
        if (atCourierId is not null)
        {
            Status = ReturnRequestStatus.AtCourier;
        }

        if (atLastMileId is not null)
        {
            Status = ReturnRequestStatus.InLastMile;
        }

        if (atCourierId is null && atLastMileId is null)
        {
            throw new ReturnRequestLocationNotSpecifiedException();
        }

        TenantId = tenantId;
        ContractorId = contractorId;
        CourierId = courierId;

        AtCourierId = atCourierId;
        AtLastMileId = atLastMileId;

        SetCode(code);
        SetCause(cause);
        SetComment(comment);

        AddStatusToHistory();
        IsLocked = true;
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

    public void PickUp()
    {
        CheckTransition(ReturnRequestStatus.AtCourier);
        Status = ReturnRequestStatus.AtCourier;
        AddStatusToHistory();
    }

    internal void SetCode(string code)
    {
        CheckLocked();

        Code = Check.NotNullOrWhiteSpace(
            code,
            nameof(code),
            MaxCodeLenght);
    }

    internal void Return()
    {
        CheckTransition(ReturnRequestStatus.Returned);
        Status = ReturnRequestStatus.Returned;
        AddStatusToHistory();
    }

    internal void Cancel()
    {
        CheckTransition(ReturnRequestStatus.Canceled);
        Status = ReturnRequestStatus.Canceled;
        AddStatusToHistory();
    }

    private void CheckTransition(ReturnRequestStatus next)
    {
        if (!Status.CanTransitionTo(next))
        {
            throw new ReturnRequestIncorrectStatusException(Status, next);
        }
    }

    private void CheckLocked()
    {
        if (IsLocked)
        {
            throw new ReturnRequestLockedException(Id);
        }
    }

    private void AddStatusToHistory()
    {
        _changesHistory.Add(new ReturnRequestStatusChangeHistory(TenantId, ContractorId, Id, Status));
    }
}