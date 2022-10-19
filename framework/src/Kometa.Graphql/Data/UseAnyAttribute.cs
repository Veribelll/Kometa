using System.Reflection;
using System.Runtime.CompilerServices;
using HotChocolate.Types.Descriptors;

namespace Kometa.Graphql.Data;

public class UseAnyAttribute : ObjectFieldDescriptorAttribute
{
    public UseAnyAttribute([CallerLineNumber] int order = 0)
    {
        Order = order;
    }

    public override void OnConfigure(IDescriptorContext context, IObjectFieldDescriptor descriptor,
        MemberInfo member)
    {
        descriptor.UseAny();
    }
}