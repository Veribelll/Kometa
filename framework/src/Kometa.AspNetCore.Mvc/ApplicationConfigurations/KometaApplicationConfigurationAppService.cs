using Kometa.MultiContractor;
using Kometa.MultiContractor.Current;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations.ObjectExtending;
using Volo.Abp.Authorization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Features;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Settings;
using Volo.Abp.Timing;
using Volo.Abp.Users;

namespace Kometa.AspNetCore.Mvc.ApplicationConfigurations;

public class KometaApplicationConfigurationAppService :
    AbpApplicationConfigurationAppService,
    IKometaApplicationConfigurationAppService
{
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly IContractorStore ContractorStore;

    public KometaApplicationConfigurationAppService(
        IOptions<AbpLocalizationOptions> localizationOptions,
        IOptions<AbpMultiTenancyOptions> multiTenancyOptions,
        IServiceProvider serviceProvider,
        IAbpAuthorizationPolicyProvider abpAuthorizationPolicyProvider,
        IPermissionDefinitionManager permissionDefinitionManager,
        DefaultAuthorizationPolicyProvider defaultAuthorizationPolicyProvider,
        IPermissionChecker permissionChecker,
        IAuthorizationService authorizationService,
        ICurrentUser currentUser,
        ISettingProvider settingProvider,
        ISettingDefinitionManager settingDefinitionManager,
        IFeatureDefinitionManager featureDefinitionManager,
        ILanguageProvider languageProvider,
        ITimezoneProvider timezoneProvider,
        IOptions<AbpClockOptions> abpClockOptions,
        ICachedObjectExtensionsDtoService cachedObjectExtensionsDtoService,
        ICurrentContractor currentContractor,
        IContractorStore contractorStore)
        : base(localizationOptions, multiTenancyOptions, serviceProvider, abpAuthorizationPolicyProvider,
            permissionDefinitionManager, defaultAuthorizationPolicyProvider, permissionChecker, authorizationService,
            currentUser, settingProvider, settingDefinitionManager, featureDefinitionManager, languageProvider,
            timezoneProvider, abpClockOptions, cachedObjectExtensionsDtoService)
    {
        CurrentContractor = currentContractor;
        ContractorStore = contractorStore;
    }


    public new async Task<SmdeApplicationConfigurationDto> GetAsync()
    {
        var dto = await base.GetAsync();

        return new SmdeApplicationConfigurationDto
        {
            Auth = dto.Auth,
            Features = dto.Features,
            Localization = dto.Localization,
            CurrentUser = dto.CurrentUser,
            Setting = dto.Setting,
            MultiTenancy = dto.MultiTenancy,
            CurrentTenant = dto.CurrentTenant,
            Timing = dto.Timing,
            Clock = dto.Clock,
            ObjectExtensions = dto.ObjectExtensions,
            CurrentContractor = GetCurrentContractor(),
            SelectableContractors = await GetSelectableContractors()
        };
    }

    private CurrentContractorDto GetCurrentContractor() =>
        new()
        {
            Id = CurrentContractor.Id,
            Name = CurrentContractor.Name
        };

    private async Task<List<SelectableContractorDto>> GetSelectableContractors()
    {
        if (CurrentUser.Id is not null)
        {
            var contractors = await ContractorStore.GetAvailableContractorsAsync(CurrentUser.GetId());

            return contractors
                .Select(x => new SelectableContractorDto
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToList();
        }

        return new List<SelectableContractorDto>();
    }
}