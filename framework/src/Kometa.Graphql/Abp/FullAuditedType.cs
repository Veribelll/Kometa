using Volo.Abp.Auditing;

namespace Kometa.Graphql.Abp;

public class FullAuditedType : InterfaceType<IFullAuditedObject>
{
    protected override void Configure(IInterfaceTypeDescriptor<IFullAuditedObject> descriptor)
    {
        descriptor.Name("FullAuditedObject");
        descriptor.Description("This interface adds IDeletionAuditedObject to IAuditedObject.");

        descriptor.BindFieldsExplicitly();

        descriptor
            .Implements<AuditedType>()
            .Implements<CreationAuditedType>()
            .Implements<HasCreationTimeType>()
            .Implements<MayHaveCreatorType>()
            .Implements<ModificationAuditedType>()
            .Implements<HasModificationTimeType>()
            .Implements<DeletionAuditedType>()
            .Implements<HasDeletionTimeType>()
            .Implements<SoftDeleteType>();
    }
}