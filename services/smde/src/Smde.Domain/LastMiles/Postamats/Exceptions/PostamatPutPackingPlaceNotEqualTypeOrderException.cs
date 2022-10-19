using Volo.Abp;

namespace Smde.LastMiles.Postamats.Exceptions;

public class PostamatPutPackingPlaceNotEqualTypeOrderException : BusinessException
{
    public PostamatPutPackingPlaceNotEqualTypeOrderException() 
        : base(nameof(PostamatPutPackingPlaceNotEqualTypeOrderException))
    {
    }
}