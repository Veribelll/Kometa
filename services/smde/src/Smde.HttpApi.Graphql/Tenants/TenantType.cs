using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants;

public class TenantType : ObjectType<Tenant>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<Tenant> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field("emailForDocuments")
            .ResolveWith<TenantResolves>(x => x.GetEmailForDocuments(default!))
            .Type<NonNullType<StringType>>();
    }

    private class TenantResolves
    {
        public string GetEmailForDocuments([Parent] Tenant tenant) => tenant.GetEmailForDocuments();
    }
}