using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.PackingPlaces;

namespace Smde.Emex.Orders;

public class EmexProductType : ObjectType<EmexProduct>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<EmexProduct> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Id)
            .ID(nameof(EmexProduct));

        descriptor
            .Field(x => x.OrderId)
            .IsProjected()
            .ID(nameof(EmexOrder));

        descriptor
            .Field(x => x.PackingPlaceId)
            .IsProjected()
            .ID(nameof(PackingPlace));

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<EnumType<EmexProductStatus>>>();

        descriptor
            .Field(x => x.TypeBalance)
            .Type<NonNullType<EnumType<EmexTypeBalance>>>();

        descriptor
            .Field(x => x.TypePayment)
            .Type<NonNullType<EnumType<EmexTypePayment>>>();

        descriptor
            .Field(x => x.Barcode)
            .Type<StringType>();

        descriptor
            .Field(x => x.Quantity)
            .Type<NonNullType<DecimalType>>();

        descriptor
            .Field(x => x.Price)
            .Type<NonNullType<DecimalType>>();

        descriptor
            .Field(x => x.Vat)
            .Type<NonNullType<DecimalType>>();

        descriptor
            .Field(x => x.Sum)
            .Type<NonNullType<DecimalType>>();

        descriptor
            .Field(x => x.VendorCode)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Manufacturer)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ManufacturerCountry)
            .Type<StringType>();

        descriptor
            .Field(x => x.ManufacturerCountryCode)
            .Type<StringType>();

        descriptor
            .Field(x => x.Marking)
            .Type<StringType>();

        descriptor
            .Field(x => x.Gtd)
            .Type<StringType>();

        descriptor
            .Field(x => x.IsLocked)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field("order")
            .ResolveWith<Resolves>(x => x.GetOrder(default!, default!, default!))
            .Type<NonNullType<EmexOrderType>>();

        descriptor
            .Field("packingPlace")
            .ResolveWith<Resolves>(x => x.GetPackingPlace(default!, default!, default!))
            .Type<PackingPlaceType>();
    }

    private class Resolves
    {
        public Task<EmexOrder> GetOrder(
            [Parent] EmexProduct product,
            IDataLoader<EmexOrder> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(product.OrderId, cancellationToken);

        public Task<PackingPlace?> GetPackingPlace(
            [Parent] EmexProduct product,
            IDataLoader<PackingPlace> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(product.PackingPlaceId, cancellationToken);
    }
}