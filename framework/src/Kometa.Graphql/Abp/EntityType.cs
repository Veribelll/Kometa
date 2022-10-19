using Volo.Abp.Domain.Entities;

namespace Kometa.Graphql.Abp;

public class EntityType : InterfaceType<IEntity<Guid>>
{
    protected override void Configure(IInterfaceTypeDescriptor<IEntity<Guid>> descriptor)
    {
        descriptor.Name("Entity");

        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.Id)
            .Type<NonNullType<IdType>>();
    }
}