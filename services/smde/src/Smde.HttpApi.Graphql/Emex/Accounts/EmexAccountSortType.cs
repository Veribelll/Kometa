using HotChocolate.Data.Sorting;

namespace Smde.Emex.Accounts;

public class EmexAccountSortType: SortInputType<EmexAccount>
{
    protected override void Configure(ISortInputTypeDescriptor<EmexAccount> descriptor)
    {
    }
}