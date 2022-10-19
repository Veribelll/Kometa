using HotChocolate.Data.Filters;

namespace Smde.LastMiles.Postamats.Cells;

public class CellFilterType : FilterInputType<Cell>
{
    protected override void Configure(IFilterInputTypeDescriptor<Cell> descriptor)
    {
        descriptor.Ignore(x => x.PostamatId);
    }
}