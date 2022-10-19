using Kometa.Graphql.Abp;
using HotChocolate.Types;
using Volo.Abp.Identity;

namespace Smde.Identity;

public class IdentityRoleType : ObjectType<IdentityRole>
{
    protected override void Configure(IObjectTypeDescriptor<IdentityRole> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.MultiTenant();

        descriptor
            .ImplementsNode()
            .IdField(x => x.Id)
            .ResolveNode((context, id) => context
                .Service<IIdentityRoleRepository>()
                .GetAsync(id, true, context.RequestAborted));

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.IsDefault)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.IsPublic)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.IsStatic)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.NormalizedName)
            .Type<NonNullType<StringType>>();
    }
}