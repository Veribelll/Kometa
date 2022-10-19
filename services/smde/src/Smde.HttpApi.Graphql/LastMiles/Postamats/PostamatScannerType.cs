using System.IO.Ports;
using HotChocolate.Types;

namespace Smde.LastMiles.Postamats;

public class PostamatScannerType: ObjectType<PostamatScanner>
{
    protected override void Configure(IObjectTypeDescriptor<PostamatScanner> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.BaudRate)
            .Type<NonNullType<IntType>>();
            
        descriptor
            .Field(x=>x.DataBits)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field(x => x.Parity)
            .Type<NonNullType<EnumType<Parity>>>();

        descriptor
            .Field(x => x.StopBits)
            .Type<NonNullType<EnumType<StopBits>>>();

        descriptor
            .Field(x => x.PortName)
            .Type<NonNullType<StringType>>();
    }
}