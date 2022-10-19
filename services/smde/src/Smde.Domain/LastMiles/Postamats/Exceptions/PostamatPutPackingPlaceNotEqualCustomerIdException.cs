using Volo.Abp;

namespace Smde.LastMiles.Postamats.Exceptions;

public class PostamatPutPackingPlaceNotEqualCustomerIdException : BusinessException
{
    public PostamatPutPackingPlaceNotEqualCustomerIdException()
    :base(nameof(PostamatPutPackingPlaceNotEqualCustomerIdException))
    {
        
    }
}