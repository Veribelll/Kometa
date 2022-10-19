using System.Collections;
using Volo.Abp;

namespace Smde.LastMiles.AccessKeys;

public class AccessKeysList: IReadOnlyList<AccessKey>
{
    protected readonly List<AccessKey> Items;
    protected readonly LastMile LastMile;

    internal AccessKeysList(List<AccessKey> items, LastMile lastMile)
    {
        Items = items;
        LastMile = lastMile;
    }

    public AccessKey GetById(Guid id) =>
        Items.First(x => x.Id == id);

    public AccessKey GetByUserId(Guid identityUserId) =>
        Items.First(x => x.IdentityUserId == identityUserId);
    
    public AccessKey GetByBarcode(string barcode) =>
        Items.First(x => x.Barcode == barcode);

    public AccessKey Add(
        Guid id,
        Guid identityUserId,
        string barcode,
        DateTime? expiresDt = null,
        bool isDisposable = false)
    {
        if (Items.Any(x=>x.Barcode == barcode))
        {
            throw new BusinessException();
        }
        
        var accessKey = new AccessKey(
            id, 
            LastMile.TenantId,
            LastMile.ContractorId, 
            LastMile.Id, 
            identityUserId,
            barcode, 
            expiresDt, 
            isDisposable);
        
        Items.Add(accessKey);
        
        return accessKey;
    }

    public AccessKey Update(
        Guid id,
        string barcode,
        DateTime? expiresDt = null,
        bool isDisposable = false)
    {
        var accessKey = GetById(id);

        accessKey.SetBarcode(barcode);
        accessKey.ExpiresDt = expiresDt;
        accessKey.IsDisposable = isDisposable;

        return accessKey;
    }

    public AccessKey Remove(Guid id)
    {
        var accessKey = GetById(id); 
        Items.Remove(accessKey);
        return accessKey;
    }

    public void Clear() => Items.Clear();

    public int Count => Items.Count;
    public AccessKey this[int index] => Items[index];
    public IEnumerator<AccessKey> GetEnumerator() => Items.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}