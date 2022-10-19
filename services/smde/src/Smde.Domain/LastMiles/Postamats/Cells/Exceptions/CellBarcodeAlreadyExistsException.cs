using Volo.Abp;

namespace Smde.LastMiles.Postamats.Cells.Exceptions;

public class CellBarcodeAlreadyExistsException : BusinessException
{
    public string Barcode { get; }

    public CellBarcodeAlreadyExistsException(string barcode): base("Error:Postamat:Cell:002")
    {
        Barcode = barcode;
    }
}