using HotChocolate.Types;

namespace Smde.LastMiles.Postamats.Printers;

public class SerialPrinterType: ObjectType<SerialPrinter>
{
    protected override void Configure(IObjectTypeDescriptor<SerialPrinter> descriptor)
    {
        descriptor
            .Field(x => x.Settings)
            .Type<NonNullType<SerialPortType>>();

        descriptor
            .Field(x => x.IsEnabled)
            .Type<NonNullType<BooleanType>>();
    }
}