using Volo.Abp;

namespace Smde.LastMiles.Postamats.Cells.Exceptions;

public class CellNameAlreadyExistsException: BusinessException
{
    public string Name { get; }

    public CellNameAlreadyExistsException(string name) : base("Error:Postamat:Cell:001")
    {
        Name = name;
    }
}