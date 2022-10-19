using Volo.Abp;

namespace Smde.PackingPlaces;

public class PackingPlaceIncorrectStatusException : BusinessException
{
    public PackingPlaceStatus Current { get; }
    public PackingPlaceStatus Next { get; }

    public PackingPlaceIncorrectStatusException(PackingPlaceStatus current, PackingPlaceStatus next)
        : base(nameof(PackingPlaceIncorrectStatusException))
    {
        Current = current;
        Next = next;
    }
}