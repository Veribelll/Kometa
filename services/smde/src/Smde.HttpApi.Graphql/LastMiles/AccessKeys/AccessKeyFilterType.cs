using Kometa.Graphql.Types;
using HotChocolate.Data.Filters;

namespace Smde.LastMiles.AccessKeys;

public class AccessKeyFilterType : FilterInputType<AccessKey>, IGraphqlType
{
    protected override void Configure(IFilterInputTypeDescriptor<AccessKey> descriptor)
    {
        descriptor.Ignore(x => x.LastMileId);

        descriptor
            .Field(x => x.IdentityUserId)
            .Type<IdOperationFilterInputType>();
    }
}