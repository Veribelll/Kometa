using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Identity;
using Smde.LastMiles;
using Smde.Orders;
using Smde.Sizes;
using Volo.Abp.Identity;

namespace Smde.PackingPlaces;

public class PackingPlaceType : ObjectType<PackingPlace>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<PackingPlace> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.TypeOrder)
            .Type<NonNullType<EnumType<TypeOrder>>>();

        descriptor
            .Field(x => x.CustomerId)
            .ID(nameof(Customer));

        descriptor
            .Field(x => x.CourierId)
            .ID(nameof(IdentityUser));

        descriptor
            .Field(x => x.LastMileId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.SizeId)
            .ID(nameof(Size));

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<PackingPlaceStatusType>>();

        descriptor
            .Field(x => x.Barcode)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.IsLocked)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.ChangesHistory)
            .UseFiltering(typeof(PackingPlaceStatusChangeHistoryFilterType))
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<PackingPlaceStatusChangeHistoryType>>>>();

        descriptor
            .Field("customer")
            .ResolveWith<Resolves>(x => x.GetCustomer(default!, default!, default!))
            .Type<CustomerType>();

        descriptor
            .Field("size")
            .ResolveWith<Resolves>(x => x.GetSize(default!, default!, default!))
            .Type<SizeType>();

        descriptor
            .Field("lastMile")
            .ResolveWith<Resolves>(x => x.GetLastMile(default!, default!, default!))
            .Type<LastMileType>();

        descriptor
            .Field("courier")
            .ResolveWith<Resolves>(x => x.GetCourier(default!, default!, default!))
            .Type<IdentityUserType>();
    }

    private class Resolves
    {
        public Task<Customer?> GetCustomer(
            [Parent] PackingPlace packingPlace,
            IDataLoader<Customer> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(packingPlace.CustomerId, cancellationToken);

        public Task<Size?> GetSize(
            [Parent] PackingPlace packingPlace,
            IDataLoader<Size> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(packingPlace.SizeId, cancellationToken);

        public Task<LastMile?> GetLastMile(
            [Parent] PackingPlace packingPlace,
            IDataLoader<LastMile> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(packingPlace.LastMileId, cancellationToken);

        public Task<IdentityUser?> GetCourier(
            [Parent] PackingPlace packingPlace,
            IdentityUserDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(packingPlace.CourierId, cancellationToken);
    }
}