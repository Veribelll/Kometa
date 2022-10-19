using Ardalis.SmartEnum;

namespace Smde.Orders;

public abstract class TypeOrder : SmartEnum<TypeOrder>
{
    public static readonly TypeOrder Emex = new EmexOrder();
    
    private TypeOrder(string name, int value) : base(name, value)
    {
    }
    
    private class EmexOrder: TypeOrder
    {
        public EmexOrder() : base("Emex", 1)
        {
        }
    }
}