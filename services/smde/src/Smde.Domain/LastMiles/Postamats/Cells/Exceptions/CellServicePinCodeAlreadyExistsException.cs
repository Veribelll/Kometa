using Volo.Abp;

namespace Smde.LastMiles.Postamats.Cells.Exceptions;

public class CellServicePinCodeAlreadyExistsException: BusinessException
{
    public string ServicePinCode { get; }

    public CellServicePinCodeAlreadyExistsException(string servicePinCode) : base("Error:Postamat:Cell:004")
    {
        ServicePinCode = servicePinCode;
    }
}