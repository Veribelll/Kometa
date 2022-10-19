using System.Collections;
using Smde.LastMiles.Postamats.Cells.Exceptions;

namespace Smde.LastMiles.Postamats.Cells;

public class CellDisplaysList : IReadOnlyList<CellDisplay>
{
    protected readonly List<CellDisplay> Items;
    protected readonly Postamat Postamat;

    internal CellDisplaysList(List<CellDisplay> items, Postamat postamat)
    {
        Items = items;
        Postamat = postamat;
    }

    public CellDisplay Get(int x, int y) => Items.First(c => c.X == x && c.Y == y);

    public CellDisplay Add(Guid templateCellId, int x, int y, Guid? cellId = null)
    {
        CheckCoordinates(x, y);

        var display = new CellDisplay(
            Postamat.TenantId, 
            Postamat.ContractorId, 
            Postamat.Id, 
            templateCellId, 
            x,
            y,
            cellId);
        
        Items.Add(display);

        return display;
    }

    public CellDisplay Remove(int x, int y)
    {
        var display = Get(x, y);
        Items.Remove(display);
        return display;
    }

    public void Clear() => Items.Clear();

    private void CheckCoordinates(int x, int y)
    {
        if (Items.Any(c => c.X == x && c.Y == y))
        {
            throw new CellDisplayCoordinatesAlreadyExistsException(x, y);
        }
    }

    public int Count => Items.Count;
    public CellDisplay this[int index] => Items[index];
    public IEnumerator<CellDisplay> GetEnumerator() => Items.GetEnumerator();
    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}