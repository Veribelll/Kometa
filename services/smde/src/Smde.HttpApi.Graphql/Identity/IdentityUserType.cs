using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using HotChocolate;
using HotChocolate.Types;
using Smde.Contractors;
using Volo.Abp.Identity;

namespace Smde.Identity;

public class IdentityUserType : ObjectType<IdentityUser>
{
    protected override void Configure(IObjectTypeDescriptor<IdentityUser> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .MultiTenant()
            .FullAudited();

        descriptor
            .Field(x => x.Surname)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field("middleName")
            .ResolveWith<Resolves>(x => x.GetMiddleName(default!))
            .Type<StringType>();

        descriptor
            .Field(x => x.PhoneNumber)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Email)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field("contractors")
            .ResolveWith<Resolves>(x => x.GetContractors(default!, default!, default))
            .Type<NonNullType<ListType<NonNullType<ContractorType>>>>();

        descriptor
            .Field("roleIds")
            .Resolve(context => context.Parent<IdentityUser>().Roles.Select(x => x.RoleId))
            .ID(nameof(IdentityRole));

        descriptor
            .Field("roles")
            .ResolveWith<Resolves>(r => r.GetRoles(default!, default!, default!))
            .Type<NonNullType<ListType<NonNullType<IdentityRoleType>>>>();
    }

    private class Resolves
    {
        public string? GetMiddleName([Parent] IdentityUser identityUser) =>
            identityUser.GetMiddleName();

        public Task<IReadOnlyList<Contractor>> GetContractors(
            [Parent] IdentityUser identityUser,
            IDataLoader<Contractor> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(identityUser.GetContractorIds(), cancellationToken);

        public Task<IReadOnlyList<IdentityRole>> GetRoles(
            [Parent] IdentityUser user,
            IDataLoader<IdentityRole> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(user.Roles.Select(x => x.RoleId).ToList(), cancellationToken);
    }
}