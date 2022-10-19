using Volo.Abp.Auditing;

namespace Kometa.Graphql.Abp;

public class AuditedType : InterfaceType<IAuditedObject>
{
    protected override void Configure(IInterfaceTypeDescriptor<IAuditedObject> descriptor)
    {
        descriptor.Name("AuditedObject");
        descriptor.Description("This interface can be implemented to add standard auditing properties to a class.");

        descriptor.BindFieldsExplicitly();

        descriptor
            .Implements<CreationAuditedType>()
            .Implements<HasCreationTimeType>()
            .Implements<MayHaveCreatorType>()
            .Implements<ModificationAuditedType>()
            .Implements<HasModificationTimeType>();
    }
}