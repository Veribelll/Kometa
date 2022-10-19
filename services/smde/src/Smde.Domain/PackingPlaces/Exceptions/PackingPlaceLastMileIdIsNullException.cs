using Volo.Abp;

namespace Smde.PackingPlaces;

public class PackingPlaceLastMileIdIsNullException : BusinessException
{
    public PackingPlaceLastMileIdIsNullException() : base("Error:PackingPlace:005")
    {
        
    }
}