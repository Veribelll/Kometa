using Ardalis.SmartEnum;

namespace Smde.PackingPlaces.ReturnRequests;

/// <summary>
/// Статус заявки на возврат упаковочного места
/// </summary>
public abstract class ReturnRequestStatus : SmartEnum<ReturnRequestStatus>
{
    /// <summary>
    /// Упаковочное место находится у курьера
    /// </summary>
    public static readonly ReturnRequestStatus AtCourier = new AtCourierStatus();

    /// <summary>
    /// Упаковочное место находится в последней миле
    /// </summary>
    public static readonly ReturnRequestStatus InLastMile = new InLastMileStatus();

    /// <summary>
    /// Упаковочное место возвращено
    /// </summary>
    public static readonly ReturnRequestStatus Returned = new ReturnedStatus();

    /// <summary>
    /// Отменена
    /// </summary>
    public static readonly ReturnRequestStatus Canceled = new CanceledStatus();
    
    private ReturnRequestStatus(string name, int value) : base(name, value)
    {
    }

    public abstract bool CanTransitionTo(ReturnRequestStatus next);
    
    private class AtCourierStatus : ReturnRequestStatus
    {
        public AtCourierStatus() : base("AtCourier", 1)
        {
        }

        public override bool CanTransitionTo(ReturnRequestStatus next) =>
            next == Returned || next == Canceled;
    }
    
    private class InLastMileStatus : ReturnRequestStatus
    {
        public InLastMileStatus() : base("InLastMile", 2)
        {
        }

        public override bool CanTransitionTo(ReturnRequestStatus next) => 
            next == AtCourier || next == Canceled;
    }
    
    private class ReturnedStatus: ReturnRequestStatus
    {
        public ReturnedStatus() : base("Returned", 3)
        {
        }

        public override bool CanTransitionTo(ReturnRequestStatus next) => false;
    }

    private class CanceledStatus : ReturnRequestStatus
    {
        public CanceledStatus() : base("Canceled", 4)
        {
        }

        public override bool CanTransitionTo(ReturnRequestStatus next) => false;
    }
}
