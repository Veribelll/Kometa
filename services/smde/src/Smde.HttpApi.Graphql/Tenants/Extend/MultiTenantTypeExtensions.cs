using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Tenants.Extend;

public class MultiTenantTypeExtensions : InterfaceTypeExtension, IGraphqlType
{
    protected override void Configure(IInterfaceTypeDescriptor descriptor)
    {
        descriptor.Name("MultiTenant");

        descriptor
            .Field("tenant")
            .Type<TenantType>();
    }
}