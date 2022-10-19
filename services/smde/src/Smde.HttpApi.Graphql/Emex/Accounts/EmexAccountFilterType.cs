using HotChocolate.Data.Filters;

namespace Smde.Emex.Accounts;

public class EmexAccountFilterType: FilterInputType<EmexAccount>
{
    protected override void Configure(IFilterInputTypeDescriptor<EmexAccount> descriptor)
    {
    }
}