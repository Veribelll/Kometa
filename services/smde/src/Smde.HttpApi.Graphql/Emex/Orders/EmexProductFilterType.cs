using HotChocolate.Data.Filters;

namespace Smde.Emex.Orders;

public class EmexProductFilterType : FilterInputType<EmexProduct>
{
    protected override void Configure(IFilterInputTypeDescriptor<EmexProduct> descriptor)
    {
        descriptor
            .Field(x => x.PackingPlaceId)
            .Type<IdOperationFilterInputType>();
    }
}