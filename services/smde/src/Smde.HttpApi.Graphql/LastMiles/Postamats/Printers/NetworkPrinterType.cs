using HotChocolate.Types;

namespace Smde.LastMiles.Postamats.Printers;

public class NetworkPrinterType: ObjectType<NetworkPrinter>
{
    protected override void Configure(IObjectTypeDescriptor<NetworkPrinter> descriptor)
    {
        descriptor
            .Field(x => x.IpAddress)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Port)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field(x => x.ReconnectOnTimeout)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.IsEnabled)
            .Type<NonNullType<BooleanType>>();
    }
}