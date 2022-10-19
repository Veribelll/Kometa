using Kometa.MultiContractor.Current;

namespace Kometa.Graphql.Abp;

public class MultiContractorType : InterfaceType<IMultiContractor>
{
    protected override void Configure(IInterfaceTypeDescriptor<IMultiContractor> descriptor)
    {
        descriptor.Name("MultiContractor");

        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.ContractorId)
            .Type<NonNullType<IdType>>();
    }
}