using Volo.Abp;

namespace Smde.Orders;

public class TypeOrderIsNotCorrectException : BusinessException
{
    public TypeOrder Current { get; }
    public TypeOrder Verifiable { get; }

    public TypeOrderIsNotCorrectException(TypeOrder current, TypeOrder verifiable) : base("Error:TypeOrder:001")
    {
        Current = current;
        Verifiable = verifiable;
    }
}