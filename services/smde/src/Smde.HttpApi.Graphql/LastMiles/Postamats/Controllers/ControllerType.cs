using Kometa.Graphql.Abp;
using HotChocolate.Types;

namespace Smde.LastMiles.Postamats.Controllers;

public class ControllerType : InterfaceType<ControllerBase>
{
    protected override void Configure(IInterfaceTypeDescriptor<ControllerBase> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Id)
            .ID();

        descriptor
            .Field(x => x.PostamatId)
            .Type<NonNullType<IdType>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Settings)
            .Type<NonNullType<SerialPortType>>();

        descriptor
            .Field(x => x.Locks)
            .Type<NonNullType<ListType<NonNullType<LockType>>>>();
    }
}