using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Orders;

public class TypeOrderType : EnumType<TypeOrder>, IGraphqlType
{
    protected override void Configure(IEnumTypeDescriptor<TypeOrder> descriptor)
    {
        descriptor.BindValuesExplicitly();

        foreach (var typeOrder in TypeOrder.List)
        {
            descriptor
                .Value(typeOrder)
                .Name(typeOrder.Name);
        }
    }
}