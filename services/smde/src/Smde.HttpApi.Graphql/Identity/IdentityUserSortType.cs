using HotChocolate.Data.Sorting;
using Volo.Abp.Identity;

namespace Smde.Identity;

public class IdentityUserSortType: SortInputType<IdentityUser>
{
    protected override void Configure(ISortInputTypeDescriptor<IdentityUser> descriptor)
    {
    }
}