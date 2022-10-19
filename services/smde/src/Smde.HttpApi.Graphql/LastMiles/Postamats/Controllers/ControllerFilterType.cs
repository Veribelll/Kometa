using HotChocolate.Data.Filters;

namespace Smde.LastMiles.Postamats.Controllers;

public class ControllerFilterType : FilterInputType<ControllerBase>
{
    protected override void Configure(IFilterInputTypeDescriptor<ControllerBase> descriptor)
    {
        descriptor.Ignore(x => x.PostamatId);
    }
}