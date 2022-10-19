using Volo.Abp;

namespace Smde.LastMiles.Postamats.Cells.Exceptions;

public class CellDisplayCoordinatesAlreadyExistsException : BusinessException
{
    public int X { get; }
    public int Y { get; }

    public CellDisplayCoordinatesAlreadyExistsException(int x, int y): base("Error:Postamat:CellDisplay:001")
    {
        X = x;
        Y = y;
    }
}