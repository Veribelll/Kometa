using Kometa.MultiContractor.Current;
using Smde.Orders;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

#pragma warning disable 8618

namespace Smde.LastMiles;

public class LastMileReturnPeriod : Entity, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected set; }
    public Guid ContractorId { get; protected set; }
    public Guid LastMileId { get; protected set; }
    public TypeOrder TypeOrder { get; protected set; }

    /// <summary>
    /// Период возврата заказа в часах
    /// </summary>
    public int Period { get; protected set; }

    protected LastMileReturnPeriod()
    {
    }

    internal LastMileReturnPeriod(
        Guid? tenantId,
        Guid contractorId,
        Guid lastMileId,
        TypeOrder typeOrder,
        int period)
    {
        if (period < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(period));
        }

        TenantId = tenantId;
        ContractorId = contractorId;
        LastMileId = lastMileId;
        TypeOrder = typeOrder;
        Period = period;
    }

    public override object[] GetKeys()
    {
        return new object[] { LastMileId, TypeOrder };
    }
}