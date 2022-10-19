using Ardalis.SmartEnum;

namespace Smde.PackingPlaces;

/// <summary>
/// Статус упаковочного места
/// </summary>
public abstract class PackingPlaceStatus : SmartEnum<PackingPlaceStatus>
{
    /// <summary>
    /// Создано
    /// </summary>
    public static readonly PackingPlaceStatus Created = new CreatedStatus();

    /// <summary>
    /// В процессе отправки
    /// </summary>
    public static readonly PackingPlaceStatus InProcessSend = new InProcessSendStatus();

    /// <summary>
    /// Отправлено в последнюю милю
    /// </summary>
    public static readonly PackingPlaceStatus Sent = new SentStatus();

    /// <summary>
    /// Принято в последней миле
    /// </summary>
    public static readonly PackingPlaceStatus Accepted = new AcceptedStatus();

    /// <summary>
    /// Выдано
    /// </summary>
    public static readonly PackingPlaceStatus Issued = new IssuedStatus();

    /// <summary>
    /// В процессе возвращения
    /// </summary>
    public static readonly PackingPlaceStatus InProcessReturn = new InProcessReturnStatus();

    /// <summary>
    /// Возвращен
    /// </summary>
    public static readonly PackingPlaceStatus Returned = new ReturnedStatus();
    
    /// <summary>
    /// Отменен
    /// </summary>
    public static readonly PackingPlaceStatus Cancelled = new CancelledStatus();
    
    private PackingPlaceStatus(string name, int value) : base(name, value)
    {
    }

    public abstract bool CanTransitionTo(PackingPlaceStatus next);
    
    private class CreatedStatus : PackingPlaceStatus
    {
        public CreatedStatus() : base("Created", 1)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) => 
            next == InProcessSend || next == Sent;
    }
    
    private class InProcessSendStatus : PackingPlaceStatus
    {
        public InProcessSendStatus() : base("InProcessSend", 2)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) =>
            next == Created || next == Sent || next == Cancelled;

    }
    
    private class SentStatus : PackingPlaceStatus
    {
        public SentStatus() : base("Sent", 3)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) =>
            next == Accepted || next == InProcessReturn;
    }
    
    private class AcceptedStatus : PackingPlaceStatus
    {
        public AcceptedStatus() : base("Accepted", 4)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) =>
            next == Issued || next == InProcessReturn;
    }

    private class IssuedStatus : PackingPlaceStatus 
    {
        public IssuedStatus() : base("Issued", 5)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) =>
            next == InProcessReturn;
    }
    
    private class InProcessReturnStatus : PackingPlaceStatus
    {
        public InProcessReturnStatus() : base("InProcessReturn", 6)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) =>
            next == Returned || next == Sent || next == Accepted;
    }
    
    private class ReturnedStatus : PackingPlaceStatus
    {
        public ReturnedStatus() : base("Returned", 7)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) => false;
    }
    
    private class CancelledStatus : PackingPlaceStatus
    {
        public CancelledStatus() : base("Cancelled", 8)
        {
        }

        public override bool CanTransitionTo(PackingPlaceStatus next) => false;
    }
}