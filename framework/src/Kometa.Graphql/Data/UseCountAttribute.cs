using System.Reflection;
using System.Runtime.CompilerServices;
using HotChocolate.Types.Descriptors;

namespace Kometa.Graphql.Data;

public class UseCountAttribute : ObjectFieldDescriptorAttribute
{
    public UseCountAttribute([CallerLineNumber] int order = 0)
    {
        Order = order;
    }

    public override void OnConfigure(IDescriptorContext context, IObjectFieldDescriptor descriptor,
        MemberInfo member)
    {
        descriptor.UseCount();
    }
}