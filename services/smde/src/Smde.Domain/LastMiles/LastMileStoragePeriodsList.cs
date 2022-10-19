using System.Collections;
using Smde.Orders;

namespace Smde.LastMiles;

public class LastMileStoragePeriodsList : IReadOnlyList<LastMileStoragePeriod>
{
    protected readonly List<LastMileStoragePeriod> Items;
    protected readonly LastMile LastMile;

    public LastMileStoragePeriodsList(List<LastMileStoragePeriod> items, LastMile lastMile)
    {
        Items = items;
        LastMile = lastMile;
    }

    public LastMileStoragePeriod Get(TypeOrder typeOrder)=>
        Items.First(x => x.TypeOrder == typeOrder);

    public LastMileStoragePeriod AddOrUpdate(TypeOrder typeOrder, int period)
    {
        Items.RemoveAll(x=>x.TypeOrder == typeOrder);

        var storagePeriod = new LastMileStoragePeriod(
            LastMile.TenantId,
            LastMile.ContractorId,
            LastMile.Id,
            typeOrder,
            period);
        
        Items.Add(storagePeriod);

        return storagePeriod;
    }

    public LastMileStoragePeriod Remove(TypeOrder typeOrder)
    {
        var storagePeriod = Get(typeOrder);
        Items.Remove(storagePeriod);
        return storagePeriod;
    }

    public void Clear() => Items.Clear();

    public int Count => Items.Count;
    public LastMileStoragePeriod this[int index] => Items[index];
    public IEnumerator<LastMileStoragePeriod> GetEnumerator() => Items.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}