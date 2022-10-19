using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Identity;
using Volo.Abp.Identity;

namespace Smde.LastMiles.AccessKeys;

public class AccessKeyType : ObjectType<AccessKey>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<AccessKey> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Barcode)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.LastMileId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.IdentityUserId)
            .ID(nameof(IdentityUser));

        descriptor
            .Field(x => x.ExpiresDt)
            .Type<DateTimeType>();

        descriptor
            .Field(x => x.LastEntrance)
            .Type<DateTimeType>();

        descriptor
            .Field(x => x.IsDisposable)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field("lastMile")
            .ResolveWith<Resolves>(x => x.GetLastMile(default!, default!, default!))
            .Type<NonNullType<LastMileType>>();

        descriptor
            .Field("identityUser")
            .ResolveWith<Resolves>(x => x.GetIdentityUser(default!, default!, default!))
            .Type<NonNullType<IdentityUserType>>();
    }

    private class Resolves
    {
        public Task<LastMile> GetLastMile(
            [Parent] AccessKey accessKey,
            IDataLoader<LastMile> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(accessKey.LastMileId, cancellationToken);

        public Task<IdentityUser> GetIdentityUser(
            [Parent] AccessKey accessKey,
            IdentityUserDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(accessKey.IdentityUserId, cancellationToken);
    }
}