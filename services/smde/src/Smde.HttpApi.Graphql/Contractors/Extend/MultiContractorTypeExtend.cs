using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.Contractors.Extend;

internal class MultiContractorTypeExtend : InterfaceTypeExtension, IGraphqlType
{
    protected override void Configure(IInterfaceTypeDescriptor descriptor)
    {
        descriptor.Name("MultiContractor");

        descriptor
            .Field("contractor")
            .Type<NonNullType<ContractorType>>();
    }
}