using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using HotChocolate;
using HotChocolate.Types;
using Smde.Orders;
using Smde.PackingPlaces;

namespace Smde.LastMiles.Postamats.Cells;

public class PlaceInCellType : ObjectType<PlaceInCell>
{
    protected override void Configure(IObjectTypeDescriptor<PlaceInCell> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.CellId)
            .ID(nameof(Cell));

        descriptor
            .Field(x => x.PackingPlaceId)
            .ID(nameof(PackingPlace));

        descriptor
            .Field(x => x.StoreUntil)
            .Type<DateTimeType>();

        descriptor
            .Field(x => x.Reserved)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field("packingPlace")
            .ResolveWith<Resolvers>(x => x.GetPackingPlace(default!, default!, default!))
            .Type<NonNullType<PackingPlaceType>>();
    }

    private class Resolvers
    {
        public Task<PackingPlace> GetPackingPlace(
            [Parent] PlaceInCell placeInCell,
            IDataLoader<PackingPlace> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(placeInCell.PackingPlaceId, cancellationToken);
    }
}