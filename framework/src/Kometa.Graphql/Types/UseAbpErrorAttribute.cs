using System.Reflection;
using HotChocolate.Types.Descriptors;

namespace Kometa.Graphql.Types;

public class UseAbpErrorAttribute : ObjectFieldDescriptorAttribute
{
    public override void OnConfigure(IDescriptorContext context, IObjectFieldDescriptor descriptor, MemberInfo member)
    {
        descriptor.Error<AbpErrorFactory>();
    }
}