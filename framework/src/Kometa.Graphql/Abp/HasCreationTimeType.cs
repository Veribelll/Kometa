using Volo.Abp.Auditing;

namespace Kometa.Graphql.Abp;

public class HasCreationTimeType : InterfaceType<IHasCreationTime>
{
    protected override void Configure(IInterfaceTypeDescriptor<IHasCreationTime> descriptor)
    {
        descriptor.Name("HasCreationTime");
        descriptor.Description("A standard interface to add CreationTime property.");

        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.CreationTime)
            .Type<DateTimeType>();
    }
}