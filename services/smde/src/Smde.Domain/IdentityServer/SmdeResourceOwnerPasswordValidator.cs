using System.Security.Claims;
using System.Text.Json;
using IdentityServer4.AspNetIdentity;
using IdentityServer4.Models;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Smde.Identity;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.IdentityServer;
using Volo.Abp.IdentityServer.AspNetIdentity;
using Volo.Abp.IdentityServer.Localization;
using Volo.Abp.MultiTenancy;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Smde.IdentityServer;

public class SmdeResourceOwnerPasswordValidator : AbpResourceOwnerPasswordValidator
{
    public SmdeResourceOwnerPasswordValidator(
        SmdeIdentityUserManager userManager,
        SignInManager<IdentityUser> signInManager,
        IdentitySecurityLogManager identitySecurityLogManager,
        ILogger<ResourceOwnerPasswordValidator<IdentityUser>> logger,
        IStringLocalizer<AbpIdentityServerResource> localizer,
        IOptions<AbpIdentityOptions> abpIdentityOptions,
        IHybridServiceScopeFactory serviceScopeFactory,
        IOptions<IdentityOptions> identityOptions)
        : base(userManager, signInManager, identitySecurityLogManager, logger, localizer, abpIdentityOptions,
            serviceScopeFactory, identityOptions)
    {
    }

    public override async Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
    {
        using var scope = ServiceScopeFactory.CreateScope();
        var dataFilter = scope.ServiceProvider.GetRequiredService<IDataFilter>();

        using (dataFilter.Disable<IMultiTenant>())
        {
            var user = await UserManager.FindByEmailAsync(context.UserName);
            string errorDescription;

            if (user != null)
            {
                await IdentityOptions.SetAsync();
                var result = await SignInManager.CheckPasswordSignInAsync(user, context.Password, true);
                if (result.Succeeded)
                {
                    if (await IsTfaEnabledAsync(user))
                    {
                        await HandleTwoFactorLoginAsync(context, user);
                    }
                    else
                    {
                        await SetSuccessResultAsync(context, user);
                    }

                    return;
                }

                if (result.IsLockedOut)
                {
                    Logger.LogInformation("Authentication failed for username: {username}, reason: locked out",
                        context.UserName);
                    errorDescription = Localizer["UserLockedOut"];
                }
                else if (result.IsNotAllowed)
                {
                    Logger.LogInformation("Authentication failed for username: {username}, reason: not allowed",
                        context.UserName);
                    errorDescription = Localizer["LoginIsNotAllowed"];
                }
                else
                {
                    Logger.LogInformation(
                        "Authentication failed for username: {username}, reason: invalid credentials",
                        context.UserName);
                    errorDescription = Localizer["InvalidUserNameOrPassword"];
                }

                await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext
                {
                    Identity = IdentityServerSecurityLogIdentityConsts.IdentityServer,
                    Action = result.ToIdentitySecurityLogAction(),
                    UserName = context.UserName,
                    ClientId = await FindClientIdAsync(context)
                });
            }
            else
            {
                Logger.LogInformation("No user found matching username: {username}", context.UserName);
                errorDescription = Localizer["InvalidUsername"];

                await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext()
                {
                    Identity = IdentityServerSecurityLogIdentityConsts.IdentityServer,
                    Action = IdentityServerSecurityLogActionConsts.LoginInvalidUserName,
                    UserName = context.UserName,
                    ClientId = await FindClientIdAsync(context)
                });
            }

            context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, errorDescription);
        }
    }
}