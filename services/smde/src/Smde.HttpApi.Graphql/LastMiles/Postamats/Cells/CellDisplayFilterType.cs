using Kometa.Graphql.Types;
using HotChocolate.Data.Filters;

namespace Smde.LastMiles.Postamats.Cells;

public class CellDisplayFilterType : FilterInputType<CellDisplay>, IGraphqlType
{
    protected override void Configure(IFilterInputTypeDescriptor<CellDisplay> descriptor)
    {
        descriptor.Ignore(x => x.PostamatId);
    }
}