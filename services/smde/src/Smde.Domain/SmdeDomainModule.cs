using Kometa.Domain;
using Kometa.Sms.SmsCenter;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Smde.Contractors;
using Smde.Identity;
using Smde.IdentityServer;
using Smde.LastMiles.AccessKeys;
using Smde.Notification;
using Smde.PackingPlaces;
using Smde.Sizes;
using Volo.Abp.AuditLogging;
using Volo.Abp.AutoMapper;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.BlobStoring;
using Volo.Abp.Data;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.Emailing;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.PermissionManagement.IdentityServer;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;

namespace Smde;

[DependsOn(typeof(AbpAuditLoggingDomainModule))]
[DependsOn(typeof(AbpBackgroundJobsDomainModule))]
[DependsOn(typeof(AbpFeatureManagementDomainModule))]
[DependsOn(typeof(AbpPermissionManagementDomainModule))]
[DependsOn(typeof(AbpIdentityDomainModule))]
[DependsOn(typeof(AbpPermissionManagementDomainIdentityModule))]
[DependsOn(typeof(AbpIdentityServerDomainModule))]
[DependsOn(typeof(AbpPermissionManagementDomainIdentityServerModule))]
[DependsOn(typeof(AbpSettingManagementDomainModule))]
[DependsOn(typeof(AbpTenantManagementDomainModule))]
[DependsOn(typeof(AbpBlobStoringModule))]
[DependsOn(typeof(AbpEmailingModule))]
[DependsOn(typeof(KometaDddDomainModule))]
[DependsOn(typeof(KometaSmsCenterModule))]
[DependsOn(typeof(SmdeDomainSharedModule))]
public class SmdeDomainModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IIdentityServerBuilder>(builder =>
        {
            builder.AddExtensionGrantValidator<AccessKeyGrantValidator>();
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpMultiTenancyOptions>(options =>
        {
            options.IsEnabled = true;
        });

        Configure<AbpSequentialGuidGeneratorOptions>(options =>
        {
            options.DefaultSequentialGuidType = SequentialGuidType.SequentialAsString;
        });

        Configure<IdentityOptions>(options =>
        {
            options.User.RequireUniqueEmail = true;

            options.Password.RequireDigit = false;
            options.Password.RequiredLength = 1;
            options.Password.RequireLowercase = false;
            options.Password.RequireUppercase = false;
            options.Password.RequiredUniqueChars = 1;
            options.Password.RequireNonAlphanumeric = false;
        });

        context.Services.AddAutoMapperObjectMapper<SmdeDomainModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddProfile<SmdeDomainAutoMapperProfile>(true);
        });

        Configure<AbpBackgroundJobWorkerOptions>(options =>
        {
            options.DefaultTimeout = 864000;
        });

        Configure<AbpBackgroundJobOptions>(options =>
        {
            options.IsJobExecutionEnabled = true;
        });

        Configure<AbpDataSeedOptions>(options =>
        {
            options.Contributors.Clear();

            options.Contributors.Add<PermissionDataSeedContributor>();
            options.Contributors.Add<SmdeIdentityRoleDataSeedContributor>();
            options.Contributors.Add<SmdeIdentityDataSeedContributor>();
            options.Contributors.Add<SmdeIdentityServerDataSeedContributor>();
            options.Contributors.Add<SizeDataSeedContributor>();
        });

        Configure<AbpDistributedEntityEventOptions>(options =>
        {
            options.AutoEventSelectors.Add<Company>();
            options.AutoEventSelectors.Add<IndividualEntrepreneur>();
            options.AutoEventSelectors.Add<PackingPlace>();

            options.EtoMappings.Add<Company, ContractorEto>();
            options.EtoMappings.Add<IndividualEntrepreneur, ContractorEto>();
            options.EtoMappings.Add<PackingPlace, PackingPlaceEto>();
        });

        Configure<NotificationDataResolveOptions>(options =>
        {
            options.Resolvers.Add(new PostamatResolveContributor());
            options.Resolvers.Add(new PackingPlaceBarcodeResolveContributor());
            options.Resolvers.Add(new EmexOrderIdsResolveContributor());
            options.Resolvers.Add(new CustomerResolveContributor());
        });

        context.Services.Replace(ServiceDescriptor.Transient<IResourceOwnerPasswordValidator,
            SmdeResourceOwnerPasswordValidator>());


#if DEBUG
        context.Services.Replace(ServiceDescriptor.Singleton<IEmailSender, NullEmailSender>());
#endif
    }
}