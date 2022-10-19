using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.MultiTenancy;

namespace Smde.ApplicationConfigurations;

public class CurrentTenantType : ObjectType<CurrentTenantDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<CurrentTenantDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("CurrentTenant");

        descriptor
            .Field(x => x.Id)
            .ID("Tenant");

        descriptor
            .Field(x => x.Name)
            .Type<StringType>();

        descriptor
            .Field(x => x.IsAvailable)
            .Type<NonNullType<BooleanType>>();
    }
}