using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Smde.ApplicationConfigurations;

public class ApplicationAuthConfigurationType : ObjectType<ApplicationAuthConfigurationDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<ApplicationAuthConfigurationDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("ApplicationAuthConfiguration");

        descriptor
            .Field("policies")
            .ResolveWith<Resolves>(x => x.GetPolicies(default!))
            .Type(new NonNullType(new ListType(new NonNullType(new PolicyType("Policy")))));

        descriptor
            .Field("grantedPolicies")
            .ResolveWith<Resolves>(x => x.GetGrantedPolicies(default!))
            .Type(new NonNullType(new ListType(new NonNullType(new PolicyType("GrantedPolicy")))));
    }

    private record Policy(string Key, bool Value);

    private class PolicyType : ObjectType<Policy>
    {
        private readonly string _name;

        public PolicyType(string name)
        {
            _name = name;
        }

        protected override void Configure(IObjectTypeDescriptor<Policy> descriptor)
        {
            descriptor.BindFieldsExplicitly();

            descriptor.Name(_name);

            descriptor
                .Field(x => x.Key)
                .Type<NonNullType<StringType>>();

            descriptor
                .Field(x => x.Value)
                .Type<NonNullType<BooleanType>>();
        }
    }

    private class Resolves
    {
        public List<Policy> GetPolicies([Parent] ApplicationAuthConfigurationDto obj) =>
            obj.Policies.Select(x => new Policy(x.Key, x.Value)).ToList();

        public List<Policy> GetGrantedPolicies([Parent] ApplicationAuthConfigurationDto obj) =>
            obj.GrantedPolicies.Select(x => new Policy(x.Key, x.Value)).ToList();
    }
}