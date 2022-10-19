using Volo.Abp.Auditing;

namespace Kometa.Graphql.Abp;

public class CreationAuditedType : InterfaceType<ICreationAuditedObject>
{
    protected override void Configure(IInterfaceTypeDescriptor<ICreationAuditedObject> descriptor)
    {
        descriptor.Name("CreationAuditedObject");
        descriptor.Description(
            "This interface can be implemented to store creation information (who and when created).");

        descriptor.BindFieldsExplicitly();

        descriptor.Implements<HasCreationTimeType>();
        descriptor.Implements<MayHaveCreatorType>();
    }
}