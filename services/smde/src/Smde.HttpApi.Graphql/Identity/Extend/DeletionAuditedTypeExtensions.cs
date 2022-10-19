using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Identity.Extend;

public class DeletionAuditedTypeExtensions : InterfaceTypeExtension, IGraphqlType
{
    protected override void Configure(IInterfaceTypeDescriptor descriptor)
    {
        descriptor.Name("DeletionAuditedObject");

        descriptor
            .Field("deleter")
            .Type<IdentityUserType>();
    }
}