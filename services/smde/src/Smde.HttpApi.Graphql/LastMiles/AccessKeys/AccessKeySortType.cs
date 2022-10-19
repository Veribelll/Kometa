using Kometa.Graphql.Types;
using HotChocolate.Data.Sorting;

namespace Smde.LastMiles.AccessKeys;

public class AccessKeySortType : SortInputType<AccessKey>, IGraphqlType
{
    protected override void Configure(ISortInputTypeDescriptor<AccessKey> descriptor)
    {
        descriptor.Ignore(x => x.LastMileId);
    }
}