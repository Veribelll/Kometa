using Ardalis.SmartEnum;

namespace Smde.PackingPlaces.ShipmentRequests;

/// <summary>
/// Статус заявки на отправку упаковочных мест в последнюю милю
/// </summary>
public abstract class ShipmentRequestStatus : SmartEnum<ShipmentRequestStatus>
{
    /// <summary>
    /// Создана
    /// </summary>
    public static readonly ShipmentRequestStatus Created = new CreatedStatus();

    /// <summary>
    /// Отправлена в последнюю милю
    /// </summary>
    public static readonly ShipmentRequestStatus Sent = new SentStatus();

    /// <summary>
    /// Частично принята в последней миле
    /// </summary>
    public static readonly ShipmentRequestStatus PartiallyAccepted = new PartiallyAcceptedStatus();

    /// <summary>
    /// Принята в последней миле
    /// </summary>
    public static readonly ShipmentRequestStatus Accepted = new AcceptedStatus();

    /// <summary>
    /// Отменена
    /// </summary>
    public static readonly ShipmentRequestStatus Canceled = new CanceledStatus();
    
    private ShipmentRequestStatus(string name, int value) : base(name, value)
    {
    }

    public abstract bool CanTransitionTo(ShipmentRequestStatus next);
    
    private class CreatedStatus : ShipmentRequestStatus
    {
        public CreatedStatus() : base("Created", 1)
        {
        }

        public override bool CanTransitionTo(ShipmentRequestStatus next) =>
            next == Sent || next == Canceled;
    }
    
    private class SentStatus: ShipmentRequestStatus
    {
        public SentStatus() : base("Sent", 2)
        {
        }

        public override bool CanTransitionTo(ShipmentRequestStatus next) =>
            next == PartiallyAccepted || next == Accepted;
    }
    
    private class PartiallyAcceptedStatus : ShipmentRequestStatus
    {
        public PartiallyAcceptedStatus() : base("PartiallyAccepted", 3)
        {
        }

        public override bool CanTransitionTo(ShipmentRequestStatus next) =>
            next == Accepted;
    }
    
    private class AcceptedStatus :ShipmentRequestStatus
    {
        public AcceptedStatus() : base("Accepted", 4)
        {
        }

        public override bool CanTransitionTo(ShipmentRequestStatus next) => false;
    }

    private class CanceledStatus : ShipmentRequestStatus
    {
        public CanceledStatus() : base("Canceled", 4)
        {
        }

        public override bool CanTransitionTo(ShipmentRequestStatus next) => false;
    }
} 
