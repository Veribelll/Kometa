using Kometa.Graphql.Types;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class CurrentUserType : ObjectType<CurrentUserDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<CurrentUserDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("CurrentUser");

        descriptor
            .Field(x => x.IsAuthenticated)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.Id)
            .ID("IdentityUser");

        descriptor
            .Field(x => x.TenantId)
            .ID("Tenant");

        descriptor
            .Field(x => x.ImpersonatorUserId)
            .ID("IdentityUser");

        descriptor
            .Field(x => x.ImpersonatorTenantId)
            .ID("Tenant");

        descriptor
            .Field(x => x.UserName)
            .Type<StringType>();

        descriptor
            .Field(x => x.Name)
            .Type<StringType>();

        descriptor
            .Field(x => x.SurName)
            .Type<StringType>();

        descriptor
            .Field(x => x.Email)
            .Type<StringType>();

        descriptor
            .Field(x => x.EmailVerified)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.PhoneNumber)
            .Type<StringType>();

        descriptor
            .Field(x => x.PhoneNumberVerified)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.Roles)
            .Type<NonNullType<ListType<NonNullType<StringType>>>>();
    }
}