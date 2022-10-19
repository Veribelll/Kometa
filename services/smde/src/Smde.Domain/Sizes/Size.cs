using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Sizes.SizeConstants;

#pragma warning disable 8618

namespace Smde.Sizes;

public class Size : FullAuditedAggregateRoot<Guid>, IMultiTenant
{
    public Guid? TenantId { get; protected init; }

    public string Name { get; protected set; }

    protected Size()
    {
    }

    internal Size(Guid id, Guid? tenantId, string name) : base(id)
    {
        TenantId = tenantId;
        SetName(name);
    }

    internal void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }
}