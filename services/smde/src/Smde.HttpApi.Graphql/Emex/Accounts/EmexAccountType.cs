using Kometa.Graphql.Abp;
using HotChocolate.Types;

namespace Smde.Emex.Accounts;

public class EmexAccountType : ObjectType<EmexAccount>
{
    protected override void Configure(IObjectTypeDescriptor<EmexAccount> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.UserId)
            .Type<NonNullType<LongType>>();
    }
}