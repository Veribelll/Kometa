using HotChocolate.Types;

namespace Smde.LastMiles.Postamats.Printers;

public class FilePrinterType: ObjectType<FilePrinter>
{
    protected override void Configure(IObjectTypeDescriptor<FilePrinter> descriptor)
    {
        descriptor
            .Field(x => x.FilePath)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.IsEnabled)
            .Type<NonNullType<BooleanType>>();
    }
}