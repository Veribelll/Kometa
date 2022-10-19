using HotChocolate.Data.Filters;

namespace Smde.Sizes;

public class SizeFilterType: FilterInputType<Size>
{
    protected override void Configure(IFilterInputTypeDescriptor<Size> descriptor)
    {
    }
}