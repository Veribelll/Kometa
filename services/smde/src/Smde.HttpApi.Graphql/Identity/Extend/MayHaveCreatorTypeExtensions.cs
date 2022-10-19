using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Identity.Extend;

public class MayHaveCreatorTypeExtensions : InterfaceTypeExtension, IGraphqlType
{
    protected override void Configure(IInterfaceTypeDescriptor descriptor)
    {
        descriptor.Name("MayHaveCreator");

        descriptor
            .Field("creator")
            .Type<IdentityUserType>();
    }
}