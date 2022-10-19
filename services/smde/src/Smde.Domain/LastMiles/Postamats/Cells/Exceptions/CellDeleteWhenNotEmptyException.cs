using Volo.Abp;

namespace Smde.LastMiles.Postamats.Cells.Exceptions;

public class CellDeleteWhenNotEmptyException: BusinessException
{
    public CellDeleteWhenNotEmptyException(): base(nameof(CellDeleteWhenNotEmptyException))
    {
        
    }
}