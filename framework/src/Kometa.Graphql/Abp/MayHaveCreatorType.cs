using Volo.Abp.Auditing;

namespace Kometa.Graphql.Abp;

public class MayHaveCreatorType : InterfaceType<IMayHaveCreator>
{
    protected override void Configure(IInterfaceTypeDescriptor<IMayHaveCreator> descriptor)
    {
        descriptor.Name("MayHaveCreator");
        descriptor.Description("Standard interface for an entity that MAY have a creator.");

        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.CreatorId)
            .Type<IdType>();
    }
}