using Kometa.AspNetCore.Mvc.ApplicationConfigurations;
using Kometa.Graphql.Types;
using HotChocolate.Types;
using Smde.Contractors;

namespace Smde.ApplicationConfigurations;

public class CurrentContractorType : ObjectType<CurrentContractorDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<CurrentContractorDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("CurrentContractor");

        descriptor
            .Field(x => x.Id)
            .ID(nameof(Contractor));

        descriptor
            .Field(x => x.Name)
            .Type<StringType>();
    }
}