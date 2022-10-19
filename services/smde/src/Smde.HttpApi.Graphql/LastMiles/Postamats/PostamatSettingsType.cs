using HotChocolate.Types;

namespace Smde.LastMiles.Postamats;

public class PostamatSettingsType: ObjectType<PostamatSettings>
{
    protected override void Configure(IObjectTypeDescriptor<PostamatSettings> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Field(x => x.IsAutoUpdate)
            .Type<NonNullType<BooleanType>>();
            
        descriptor
            .Field(x=>x.ReceptionWaitingListOnly)
            .Type<NonNullType<BooleanType>>();
            
        descriptor
            .Field(x => x.AdminPhone)
            .Type<StringType>();
    }
}