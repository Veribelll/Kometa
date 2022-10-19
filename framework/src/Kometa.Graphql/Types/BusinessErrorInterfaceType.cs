using Volo.Abp;

namespace Kometa.Graphql.Types;

public class BusinessErrorInterfaceType : InterfaceType<BusinessException>, IGraphqlType
{
    protected override void Configure(IInterfaceTypeDescriptor<BusinessException> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("BusinessError");

        descriptor.Implements<ErrorInterfaceType>();

        descriptor
            .Field(x => x.Code)
            .Type<StringType>();

        descriptor
            .Field(x => x.Message)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Details)
            .Type<StringType>();
    }
}