using HotChocolate.Data.Filters;
using Volo.Abp.Identity;

namespace Smde.Identity;

public class IdentityUserFilterType: FilterInputType<IdentityUser>
{
    protected override void Configure(IFilterInputTypeDescriptor<IdentityUser> descriptor)
    {
    }
}