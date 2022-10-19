using HotChocolate.Types;

namespace Smde.Contractors;

public class AccountBankType: ObjectType<AccountBank>
{
    protected override void Configure(IObjectTypeDescriptor<AccountBank> descriptor)
    {
        descriptor.BindFieldsExplicitly();
            
        descriptor
            .Field(x => x.BankName)
            .Type<NonNullType<StringType>>();
            
        descriptor
            .Field(x => x.Bic)
            .Type<NonNullType<StringType>>();
            
        descriptor
            .Field(x => x.PaymentAccount)
            .Type<NonNullType<StringType>>();
            
        descriptor
            .Field(x => x.CorrespondentAccount)
            .Type<NonNullType<StringType>>();
    }
}