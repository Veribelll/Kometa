using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.LastMiles.Postamats.Controllers;
using Smde.Sizes;

namespace Smde.LastMiles.Postamats.Cells;

public class CellType : ObjectType<Cell>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<Cell> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.PostamatId)
            .ID(nameof(LastMile));

        descriptor
            .Field(x => x.SizeId)
            .ID(nameof(Size));

        descriptor
            .Field(x => x.LockId)
            .ID(nameof(Lock));

        descriptor
            .Field(x => x.Type)
            .Type<NonNullType<EnumType<TypeCell>>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Barcode)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<EnumType<CellStatus>>>();

        descriptor
            .Field(x => x.PinCode)
            .Type<StringType>();

        descriptor
            .Field(x => x.ServicePinCode)
            .Type<StringType>();

        descriptor
            .Field(x => x.IsEnable)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.Priority)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field(x => x.Places)
            .Type<NonNullType<ListType<NonNullType<PlaceInCellType>>>>();

        descriptor
            .Field("size")
            .ResolveWith<Resolves>(x => x.GetSize(default!, default!, default!))
            .Type<SizeType>();

        descriptor
            .Field("lock")
            .ResolveWith<Resolves>(x => x.GetLock(default!, default!, default!))
            .Type<LockType>();

    }

    private class Resolves
    {
        public Task<Size?> GetSize(
            [Parent] Cell cell,
            IDataLoader<Size> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(cell.SizeId, cancellationToken);

        public Task<Lock?> GetLock(
            [Parent] Cell cell,
            LockDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(cell.LockId, cancellationToken);
    }
}