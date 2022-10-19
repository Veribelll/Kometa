using Volo.Abp;

namespace Smde.PackingPlaces;

public class PackingPlaceLockedException : BusinessException
{
    public Guid Id { get; }

    public PackingPlaceLockedException(Guid id): base("PackingPlaceLockedException")
    {
        Id = id;
    }
}