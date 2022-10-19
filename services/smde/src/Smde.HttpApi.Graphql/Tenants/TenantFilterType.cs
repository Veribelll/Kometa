using HotChocolate.Data.Filters;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants;

public class TenantFilterType: FilterInputType<Tenant>
{
    protected override void Configure(IFilterInputTypeDescriptor<Tenant> descriptor)
    {
    }
}