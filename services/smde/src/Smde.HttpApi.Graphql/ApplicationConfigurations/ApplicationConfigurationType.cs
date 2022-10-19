using Kometa.AspNetCore.Mvc.ApplicationConfigurations;
using Kometa.Graphql.Types;
using HotChocolate.Types;

namespace Smde.ApplicationConfigurations;

public class ApplicationConfigurationType : ObjectType<SmdeApplicationConfigurationDto>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<SmdeApplicationConfigurationDto> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Name("ApplicationConfiguration");

        descriptor
            .Field(x => x.Localization)
            .Type<NonNullType<ApplicationLocalizationConfigurationType>>();

        descriptor
            .Field(x => x.Auth)
            .Type<NonNullType<ApplicationAuthConfigurationType>>();

        descriptor
            .Field(x => x.Setting)
            .Type<NonNullType<ApplicationSettingConfigurationType>>();

        descriptor
            .Field(x => x.CurrentUser)
            .Type<NonNullType<CurrentUserType>>();

        descriptor
            .Field(x => x.CurrentContractor)
            .Type<NonNullType<CurrentContractorType>>();

        descriptor
            .Field(x => x.SelectableContractors)
            .Type<NonNullType<ListType<NonNullType<SelectableContractorType>>>>();

        descriptor
            .Field(x => x.Features)
            .Type<NonNullType<ApplicationFeatureConfigurationType>>();

        descriptor
            .Field(x => x.MultiTenancy)
            .Type<NonNullType<MultiTenancyInfoType>>();

        descriptor
            .Field(x => x.CurrentTenant)
            .Type<NonNullType<CurrentTenantType>>();

        descriptor
            .Field(x => x.Timing)
            .Type<NonNullType<TimingType>>();

        descriptor
            .Field(x => x.Clock)
            .Type<NonNullType<ClockType>>();
    }
}