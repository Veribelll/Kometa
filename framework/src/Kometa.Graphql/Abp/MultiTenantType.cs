using Volo.Abp.MultiTenancy;

namespace Kometa.Graphql.Abp;

public class MultiTenantType : InterfaceType<IMultiTenant>
{
    protected override void Configure(IInterfaceTypeDescriptor<IMultiTenant> descriptor)
    {
        descriptor.Name("MultiTenant");

        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.TenantId)
            .Type<IdType>();
    }
}