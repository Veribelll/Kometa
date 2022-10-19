using HotChocolate.Data.Filters;
using Smde.Orders;

namespace Smde.PackingPlaces;

public class PackingPlaceFilterType: FilterInputType<PackingPlace>
{
    protected override void Configure(IFilterInputTypeDescriptor<PackingPlace> descriptor)
    {
        descriptor
            .Field(x => x.TypeOrder)
            .Type<EnumOperationFilterInputType<TypeOrder>>();
    
        descriptor
            .Field(x => x.Status)
            .Type<EnumOperationFilterInputType<PackingPlaceStatus>>();

        descriptor
            .Field(x => x.CustomerId)
            .Type<IdOperationFilterInputType>();

        descriptor
            .Field(x => x.LastMileId)
            .Type<IdOperationFilterInputType>();

        descriptor
            .Field(x => x.SizeId)
            .Type<IdOperationFilterInputType>();
    }
}
