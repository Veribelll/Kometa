using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Identity;
using Smde.LastMiles;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestType : ObjectType<ReturnRequest>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ReturnRequest> descriptor)
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
            .Field(x => x.AtCourierId)
            .ID(nameof(IdentityUser));

        descriptor
            .Field(x => x.AtLastMileId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<ReturnRequestStatusType>>();

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
            .UseFiltering(typeof(ReturnRequestStatusChangeHistoryFilterType))
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<ReturnRequestStatusChangeHistoryType>>>>();

        descriptor
            .Field("packingPlace")
            .ResolveWith<Resolves>(r => r.GetPackingPlace(default!, default!, default!))
            .Type<NonNullType<PackingPlaceType>>();

        descriptor
            .Field("courier")
            .ResolveWith<Resolves>(r => r.GetCourier(default!, default!, default!))
            .Type<NonNullType<IdentityUserType>>();

        descriptor
            .Field("atCourier")
            .ResolveWith<Resolves>(r => r.GetAtCourier(default!, default!, default!))
            .Type<IdentityUserType>();

        descriptor
            .Field("atLastMile")
            .ResolveWith<Resolves>(r => r.GetAtLastMile(default!, default!, default!))
            .Type<LastMileType>();
    }

    private class Resolves
    {
        public Task<PackingPlace> GetPackingPlace(
            [Parent] ReturnRequest request,
            IRepository<PackingPlace, Guid> repository,
            CancellationToken cancellationToken) =>
            repository.GetAsync(x => x.ReturnRequestId == request.Id, true, cancellationToken);

        public Task<IdentityUser> GetCourier(
            [Parent] ReturnRequest request,
            IdentityUserDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(request.CourierId, cancellationToken);

        public Task<IdentityUser?> GetAtCourier(
            [Parent] ReturnRequest request,
            IdentityUserDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(request.AtCourierId, cancellationToken);

        public Task<LastMile?> GetAtLastMile(
            [Parent] ReturnRequest request,
            IDataLoader<LastMile> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(request.AtLastMileId, cancellationToken);
    }
}