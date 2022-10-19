using Volo.Abp;

namespace Smde.PackingPlaces;

public class PackingPlaceCourierIdIsNullException : BusinessException
{
    public PackingPlaceCourierIdIsNullException() : base("Error:PackingPlace:006")
    {
        
    }
}