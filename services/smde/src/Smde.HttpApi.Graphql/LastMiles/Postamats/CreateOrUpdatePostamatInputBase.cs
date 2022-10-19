using HotChocolate.Types.Relay;
using Volo.Abp.Identity;

namespace Smde.LastMiles.Postamats;

public abstract class CreateOrUpdatePostamatInputBase : CreateOrUpdateLastMileInputBase
{
    [ID(nameof(IdentityUser))]
    public Guid DefaultCourierId { get; set; }
}