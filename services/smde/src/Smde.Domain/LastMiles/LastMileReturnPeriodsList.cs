using System.Collections;
using Smde.Orders;

namespace Smde.LastMiles;

public class LastMileReturnPeriodsList : IReadOnlyList<LastMileReturnPeriod>
{
    protected readonly List<LastMileReturnPeriod> Items;
    protected readonly LastMile LastMile;

    public LastMileReturnPeriodsList(List<LastMileReturnPeriod> items, LastMile lastMile)
    {
        Items = items;
        LastMile = lastMile;
    }

    public LastMileReturnPeriod Get(TypeOrder typeOrder) =>
        Items.First(x => x.TypeOrder == typeOrder);

    public LastMileReturnPeriod AddOrUpdate(TypeOrder typeOrder, int period)
    {
        Items.RemoveAll(x => x.TypeOrder == typeOrder);

        var returnPeriod = new LastMileReturnPeriod(
            LastMile.TenantId,
            LastMile.ContractorId,
            LastMile.Id,
            typeOrder,
            period);

        Items.Add(returnPeriod);

        return returnPeriod;
    }

    public LastMileReturnPeriod Remove(TypeOrder typeOrder)
    {
        var returnPeriod = Get(typeOrder);
        Items.Remove(returnPeriod);
        return returnPeriod;
    }

    public void Clear() => Items.Clear();

    public int Count => Items.Count;
    public LastMileReturnPeriod this[int index] => Items[index];
    public IEnumerator<LastMileReturnPeriod> GetEnumerator() => Items.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}