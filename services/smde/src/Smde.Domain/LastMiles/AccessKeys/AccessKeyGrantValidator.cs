using System.Security.Claims;
using IdentityServer4.Models;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Options;
using Smde.Identity;
using Smde.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Security.Claims;
using Volo.Abp.Threading;

namespace Smde.LastMiles.AccessKeys;

public class AccessKeyGrantValidator : IExtensionGrantValidator, ITransientDependency
{
    protected readonly IRepository<LastMile, Guid> LastMileRepository;
    protected readonly ISmdeIdentityUserRepository IdentityUserRepository;
    protected readonly IStringLocalizer<SmdeResource> Localizer;
    protected readonly IOptions<IdentityOptions> IdentityOptions;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public string GrantType => AccessKeyConstants.GrantType;

    public AccessKeyGrantValidator(
        IRepository<LastMile, Guid> lastMileRepository,
        ISmdeIdentityUserRepository identityUserRepository,
        IStringLocalizer<SmdeResource> localizer,
        IOptions<IdentityOptions> identityOptions,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        LastMileRepository = lastMileRepository;
        IdentityUserRepository = identityUserRepository;
        Localizer = localizer;
        IdentityOptions = identityOptions;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task ValidateAsync(ExtensionGrantValidationContext context)
    {
        try
        {
            var cancellationToken = CancellationTokenProvider.Token;

            await IdentityOptions.SetAsync();

            var barcode = context.Request.Raw.Get("barcode");
            Guid.TryParse(context.Request.Raw.Get("last_mile_id"), out var lastMileId);

            if (string.IsNullOrWhiteSpace(barcode))
            {
                context.Result = new GrantValidationResult(
                        TokenRequestErrors.InvalidGrant, 
                        Localizer["InvalidBarcode"]);
                return;
            }

            if (lastMileId.Equals(Guid.Empty))
            {
                context.Result = new GrantValidationResult(
                    TokenRequestErrors.InvalidGrant,
                    Localizer["InvalidLastMileId"]);
                return;
            }

            var lastMile = await LastMileRepository.GetAsync(lastMileId, true, cancellationToken);
            var accessKey = lastMile.AccessKeys.GetByBarcode(barcode);
            var identityUser = await IdentityUserRepository.GetAsync(accessKey.IdentityUserId, true, cancellationToken);

            var claims = new List<Claim>();

            if (identityUser.TenantId.HasValue)
            {
                claims.Add(new Claim(AbpClaimTypes.TenantId, identityUser.TenantId.Value.ToString()));
            }

            claims.AddRange(identityUser.Claims.Select(item => new Claim(item.ClaimType, item.ClaimValue)));

            context.Result = new GrantValidationResult(identityUser.Id.ToString(), GrantType, claims);
        }
        catch (Exception e)
        {
            context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, e.Message);
        }
    }
}