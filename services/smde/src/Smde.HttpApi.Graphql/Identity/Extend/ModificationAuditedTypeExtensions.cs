using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Identity.Extend;

public class ModificationAuditedTypeExtensions : InterfaceTypeExtension, IGraphqlType
{
    protected override void Configure(IInterfaceTypeDescriptor descriptor)
    {
        descriptor.Name("ModificationAuditedObject");

        descriptor
            .Field("lastModifier")
            .Type<IdentityUserType>();
    }
}