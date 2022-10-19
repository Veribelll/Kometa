using Kometa.AspNetCore.Mvc.ApplicationConfigurations;
using HotChocolate.Types;

namespace Smde.ApplicationConfigurations;

public class SelectableContractorType : ObjectType<SelectableContractorDto>
{
    protected override void Configure(IObjectTypeDescriptor<SelectableContractorDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("SelectableContractor");

        descriptor
            .Field(x => x.Id)
            .Type<NonNullType<IdType>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();
    }
}