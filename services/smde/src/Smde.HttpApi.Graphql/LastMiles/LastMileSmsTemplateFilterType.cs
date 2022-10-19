using Kometa.Graphql.Types;
using HotChocolate.Data.Filters;

namespace Smde.LastMiles;

public class LastMileSmsTemplateFilterType : FilterInputType<LastMileSmsTemplate>, IGraphqlType
{
    protected override void Configure(IFilterInputTypeDescriptor<LastMileSmsTemplate> descriptor)
    {
        descriptor.Ignore(x => x.LastMileId);
    }
}