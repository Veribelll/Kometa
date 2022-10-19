using HotChocolate.Types;

namespace Smde.PackingPlaces;

public class PackingPlaceStatusType : EnumType<PackingPlaceStatus>
{
    protected override void Configure(IEnumTypeDescriptor<PackingPlaceStatus> descriptor)
    {
        descriptor.BindValuesExplicitly();

        foreach (var status in PackingPlaceStatus.List)
        {
            descriptor
                .Value(status)
                .Name(status.Name);
        }
    }
}