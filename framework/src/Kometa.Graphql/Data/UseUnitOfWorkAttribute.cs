using System.Reflection;
using System.Runtime.CompilerServices;
using HotChocolate.Types.Descriptors;

namespace Kometa.Graphql.Data;

public class UseUnitOfWorkAttribute : ObjectFieldDescriptorAttribute
{
    public UseUnitOfWorkAttribute([CallerLineNumber] int order = 0)
    {
        Order = order;
    }

    public override void OnConfigure(IDescriptorContext descriptorContext, IObjectFieldDescriptor descriptor,
        MemberInfo member)
    {
        descriptor.UseUnitOfWork();
    }
}