using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.LastMiles.Postamats.Controllers;

public class PromixControllerType : ObjectType<PromixController>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<PromixController> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Implements<ControllerType>();

        descriptor
            .Entity(nameof(ControllerBase))
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.PostamatId)
            .IsProjected()
            .ID(nameof(LastMile));

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