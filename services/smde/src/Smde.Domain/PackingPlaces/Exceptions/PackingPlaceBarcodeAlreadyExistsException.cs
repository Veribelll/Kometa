using Volo.Abp;

namespace Smde.PackingPlaces;

public class PackingPlaceBarcodeAlreadyExistsException : BusinessException
{
    public string Barcode { get; }

    public PackingPlaceBarcodeAlreadyExistsException(string barcode) : base("Error:PackingPlace:001")
    {
        Barcode = barcode;
    }
}