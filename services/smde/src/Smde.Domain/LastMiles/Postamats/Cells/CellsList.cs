using System.Collections;
using Smde.LastMiles.Postamats.Cells.Exceptions;
using Volo.Abp;

namespace Smde.LastMiles.Postamats.Cells;

public class CellsList : IReadOnlyList<Cell>
{
    protected readonly List<Cell> Items;
    protected readonly Postamat Postamat;

    internal CellsList(List<Cell> items, Postamat postamat)
    {
        Items = items;
        Postamat = postamat;
    }

    public Cell GetById(Guid id) => Items.First(x => x.Id == id);

    public List<Guid> GetPackingPlaceIds() => Items
        .SelectMany(x => x.Places)
        .Select(x => x.PackingPlaceId)
        .ToList();

    public string? GetPinCode(Guid packingPlaceId) =>
        Items.FirstOrDefault(x => x.Places.Any(p => p.PackingPlaceId == packingPlaceId))?.PinCode;
    
    public Cell Add(
        Guid id,
        TypeCell typeCell,
        string name,
        string barcode,
        string? pinCode = null,
        string? servicePinCode = null)
    {
        CheckName(name);
        CheckBarcode(barcode);
        CheckPinCode(pinCode);
        CheckServicePinCode(servicePinCode);
        var cell = new Cell(id, Postamat.TenantId, Postamat.ContractorId, Postamat.Id, typeCell, name, barcode);
        Items.Add(cell);
        return cell;
    }

    public Cell Activate(Guid id)
    {
        var cell = GetById(id);
        cell.IsEnable = true;
        return cell;
    }

    public Cell Deactivate(Guid id)
    {
        var cell = GetById(id);
        cell.IsEnable = false;
        return cell;
    }

    public Cell Remove(Guid id)
    {
        var cell = GetById(id);

        if (cell.Places.Count > 0)
        {
            throw new CellDeleteWhenNotEmptyException();
        }
        
        Items.Remove(cell);
        return cell;
    }

    public Cell SetName(Guid id, string name)
    {
        var cell = GetById(id);

        if (cell.Name == name)
        {
            return cell;
        }
        
        CheckName(name);
        cell.SetName(name);

        return cell;
    }

    public Cell SetBarcode(Guid id, string barcode)
    {
        var cell = GetById(id);

        if (cell.Barcode == barcode)
        {
            return cell;
        }

        CheckBarcode(barcode);
        cell.SetBarcode(barcode);

        return cell;
    }

    public Cell SetPinCode(Guid id, string? pinCode)
    {
        var cell = GetById(id);

        if (cell.PinCode == pinCode)
        {
            return cell;
        }

        CheckPinCode(pinCode);
        cell.SetPinCode(pinCode);

        return cell;
    }

    public Cell SetServicePinCode(Guid id, string? servicePinCode)
    {
        var cell = GetById(id);

        if (cell.ServicePinCode == servicePinCode)
        {
            return cell;
        }

        CheckServicePinCode(servicePinCode);
        cell.SetServicePinCode(servicePinCode);

        return cell;
    }

    public void Clear() => Items.Clear();
    
    private void CheckName(string name)
    {
        if (Items.Any(x => x.Name == name))
        {
            throw new CellNameAlreadyExistsException(name);
        }
    }

    private void CheckBarcode(string barcode)
    {
        if (Items.Any(x => x.Barcode == barcode))
        {
            throw new CellBarcodeAlreadyExistsException(barcode);
        }
    }

    private void CheckPinCode(string? pinCode)
    {
        if (!string.IsNullOrWhiteSpace(pinCode) && Items.Any(x => x.PinCode == pinCode))
        {
            throw new CellPinCodeAlreadyExistsException(pinCode);
        }
    }

    private void CheckServicePinCode(string? servicePinCode)
    {
        if (!string.IsNullOrWhiteSpace(servicePinCode) && Items.Any(x => x.ServicePinCode == servicePinCode))
        {
            throw new CellServicePinCodeAlreadyExistsException(servicePinCode);
        }
    }

    public int Count => Items.Count;
    public Cell this[int index] => Items[index];
    public IEnumerator<Cell> GetEnumerator() => Items.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}