using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Identity;
using Smde.LastMiles;
using Smde.Orders;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Linq;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestType : ObjectType<ShipmentRequest>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ShipmentRequest> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.CourierId)
            .ID(nameof(IdentityUser));

        descriptor
            .Field(x => x.LastMileId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<ShipmentRequestStatusType>>();

        descriptor
            .Field(x => x.Code)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Cause)
            .Type<StringType>();

        descriptor
            .Field(x => x.Comment)
            .Type<StringType>();

        descriptor
            .Field(x => x.ChangesHistory)
            .UseFiltering(typeof(ShipmentRequestStatusChangeHistoryFilterType))
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<ShipmentRequestStatusChangeHistoryType>>>>();

        descriptor
            .Field("courier")
            .ResolveWith<Resolves>(x => x.GetCourier(default!, default!, default))
            .Type<NonNullType<IdentityUserType>>();

        descriptor
            .Field("lastMile")
            .ResolveWith<Resolves>(x => x.GetLastMile(default!, default!, default))
            .Type<NonNullType<LastMileType>>();

        descriptor
            .Field("packingPlaces")
            .ResolveWith<Resolves>(x => x.GetPackingPlaces(default!, default!, default!, default!, default))
            .Type<NonNullType<ListType<NonNullType<PackingPlaceType>>>>();
    }

    private class Resolves
    {
        public Task<IdentityUser> GetCourier(
            [Parent] ShipmentRequest request,
            IdentityUserDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(request.CourierId, cancellationToken);

        public Task<LastMile> GetLastMile(
            [Parent] ShipmentRequest request,
            IDataLoader<LastMile> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(request.LastMileId, cancellationToken);

        public async Task<IReadOnlyCollection<PackingPlace>> GetPackingPlaces(
            [Parent] ShipmentRequest request,
            [Service] IAsyncQueryableExecuter asyncExecuter,
            [Service] IRepository<PackingPlace, Guid> repository,
            [Service] IDataLoader<PackingPlace> dataLoader,
            CancellationToken cancellationToken)
        {
            var ids = await asyncExecuter.ToListAsync((await repository.GetQueryableAsync())
                .Where(x => x.ShipmentRequestId == request.Id)
                .Select(x => x.Id), cancellationToken);

            return await dataLoader.LoadAsync(ids, cancellationToken);
        }
    }
}