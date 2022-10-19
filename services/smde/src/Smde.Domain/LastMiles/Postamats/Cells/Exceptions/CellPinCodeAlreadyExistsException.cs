using Volo.Abp;

namespace Smde.LastMiles.Postamats.Cells.Exceptions;

public class CellPinCodeAlreadyExistsException: BusinessException
{
    public string PinCode { get; }

    public CellPinCodeAlreadyExistsException(string pinCode) : base("Error:Postamat:Cell:003")
    {
        PinCode = pinCode;
    }
}