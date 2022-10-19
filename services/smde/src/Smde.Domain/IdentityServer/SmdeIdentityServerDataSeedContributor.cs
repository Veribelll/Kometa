using IdentityServer4.Models;
using Microsoft.Extensions.Configuration;
using Smde.LastMiles.AccessKeys;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.IdentityServer.ApiResources;
using Volo.Abp.IdentityServer.ApiScopes;
using Volo.Abp.IdentityServer.Clients;
using Volo.Abp.IdentityServer.IdentityResources;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;
using Volo.Abp.Uow;
using ApiResource = Volo.Abp.IdentityServer.ApiResources.ApiResource;
using ApiScope = Volo.Abp.IdentityServer.ApiScopes.ApiScope;
using Client = Volo.Abp.IdentityServer.Clients.Client;

namespace Smde.IdentityServer;

public class SmdeIdentityServerDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IApiResourceRepository _apiResourceRepository;
    private readonly IApiScopeRepository _apiScopeRepository;
    private readonly IClientRepository _clientRepository;
    private readonly IIdentityResourceDataSeeder _identityResourceDataSeeder;
    private readonly IGuidGenerator _guidGenerator;
    private readonly IPermissionDataSeeder _permissionDataSeeder;
    private readonly IConfiguration _configuration;
    private readonly ICurrentTenant _currentTenant;

    public SmdeIdentityServerDataSeedContributor(
        IClientRepository clientRepository,
        IApiResourceRepository apiResourceRepository,
        IApiScopeRepository apiScopeRepository,
        IIdentityResourceDataSeeder identityResourceDataSeeder,
        IGuidGenerator guidGenerator,
        IPermissionDataSeeder permissionDataSeeder,
        IConfiguration configuration,
        ICurrentTenant currentTenant)
    {
        _clientRepository = clientRepository;
        _apiResourceRepository = apiResourceRepository;
        _apiScopeRepository = apiScopeRepository;
        _identityResourceDataSeeder = identityResourceDataSeeder;
        _guidGenerator = guidGenerator;
        _permissionDataSeeder = permissionDataSeeder;
        _configuration = configuration;
        _currentTenant = currentTenant;
    }

    [UnitOfWork]
    public virtual async Task SeedAsync(DataSeedContext? context)
    {
        using (_currentTenant.Change(context?.TenantId))
        {
            await _identityResourceDataSeeder.CreateStandardResourcesAsync();
            await CreateApiResourcesAsync();
            await CreateApiScopesAsync();
            await CreateClientsAsync();
        }
    }

    private async Task CreateApiScopesAsync()
    {
        await CreateApiScopeAsync("Smde");
    }

    private async Task CreateApiResourcesAsync()
    {
        var commonApiUserClaims = new[]
        {
            "email",
            "email_verified",
            "name",
            "phone_number",
            "phone_number_verified",
            "role",
        };

        await CreateApiResourceAsync("Smde", commonApiUserClaims);
    }

    private async Task CreateApiResourceAsync(string name, IEnumerable<string> claims)
    {
        var apiResource = await _apiResourceRepository.FindByNameAsync(name) ?? await _apiResourceRepository.InsertAsync(
            new ApiResource(
                _guidGenerator.Create(),
                name,
                name + " API"
            ),
            true
        );

        foreach (var claim in claims)
        {
            if (apiResource.FindClaim(claim) == null)
            {
                apiResource.AddUserClaim(claim);
            }
        }

        await _apiResourceRepository.UpdateAsync(apiResource);
    }

    private async Task CreateApiScopeAsync(string name)
    {
        var apiScope = await _apiScopeRepository.FindByNameAsync(name);
        
        if (apiScope == null)
        {
            await _apiScopeRepository.InsertAsync(
                new ApiScope(
                    _guidGenerator.Create(),
                    name,
                    name + " API"
                ),
                true
            );
        }
    }

    private async Task CreateClientsAsync()
    {
        var commonScopes = new[]
        {
            "email",
            "openid",
            "profile",
            "role",
            "phone",
            "address",
            "Smde"
        };

        var configurationSection = _configuration.GetSection("IdentityServer:Clients");

        var swaggerClientId = configurationSection["Smde_Swagger:ClientId"];
        if (!swaggerClientId.IsNullOrWhiteSpace())
        {
            var swaggerRootUrl = configurationSection["Smde_Swagger:RootUrl"].TrimEnd('/');

            await CreateClientAsync(
                swaggerClientId,
                commonScopes,
                new[] { "authorization_code" },
                configurationSection["Smde_Swagger:ClientSecret"]?.Sha256(),
                $"{swaggerRootUrl}/swagger/oauth2-redirect.html",
                requireClientSecret: false, 
                corsOrigins: new[] { swaggerRootUrl.RemovePostFix("/") });
        }

        var angularClientId = configurationSection["Smde_Angular:ClientId"];
        if (!angularClientId.IsNullOrWhiteSpace())
        {
            var angularRootUrl = configurationSection["Smde_Angular:RootUrl"].TrimEnd('/');

            await CreateClientAsync(
                angularClientId,
                commonScopes,
                new[] { "password", "client_credentials", "authorization_code" },
                configurationSection["Smde_Angular:ClientSecret"].Sha256(),
                angularRootUrl,
                angularRootUrl,
                requireClientSecret: false,
                corsOrigins: new[] { angularRootUrl.RemovePostFix("/") });
        }
        
        var postamatClientId = configurationSection["Postamat:ClientId"];
        if (!postamatClientId.IsNullOrWhiteSpace())
        {
            await CreateClientAsync(
                postamatClientId,
                commonScopes,
                new[] { "password", "client_credentials", AccessKeyConstants.GrantType },
                configurationSection["Postamat:ClientSecret"].Sha256(),
                permissions: new []
                {
                    "LastMileManagement.Postamats",
                    "LastMileManagement.Postamats.IssuePackingPlace",
                },
                requireClientSecret: true);
        }
    }

    private async Task CreateClientAsync(string name,
        IEnumerable<string> scopes,
        IEnumerable<string> grantTypes,
        string? secret = null,
        string? redirectUri = null,
        string? postLogoutRedirectUri = null,
        string? frontChannelLogoutUri = null,
        bool requireClientSecret = true,
        bool requirePkce = false,
        IEnumerable<string>? permissions = null,
        IEnumerable<string>? corsOrigins = null)
    {
        var client = await _clientRepository.FindByClientIdAsync(name) ?? await _clientRepository.InsertAsync(
            new Client(
                _guidGenerator.Create(),
                name
            )
            {
                ClientName = name,
                ProtocolType = "oidc",
                Description = name,
                AlwaysIncludeUserClaimsInIdToken = true,
                AllowOfflineAccess = true,
                AbsoluteRefreshTokenLifetime = 31536000, //365 days
                AccessTokenLifetime = 31536000, //365 days
                AuthorizationCodeLifetime = 300,
                IdentityTokenLifetime = 300,
                RequireConsent = false,
                FrontChannelLogoutUri = frontChannelLogoutUri,
                RequireClientSecret = requireClientSecret,
                RequirePkce = requirePkce
            },
            true
        );

        foreach (var scope in scopes)
        {
            if (client.FindScope(scope) == null)
            {
                client.AddScope(scope);
            }
        }

        foreach (var grantType in grantTypes)
        {
            if (client.FindGrantType(grantType) == null)
            {
                client.AddGrantType(grantType);
            }
        }

        if (!secret.IsNullOrEmpty())
        {
            if (client.FindSecret(secret) == null)
            {
                client.AddSecret(secret);
            }
        }

        if (redirectUri != null)
        {
            if (client.FindRedirectUri(redirectUri) == null)
            {
                client.AddRedirectUri(redirectUri);
            }
        }

        if (postLogoutRedirectUri != null)
        {
            if (client.FindPostLogoutRedirectUri(postLogoutRedirectUri) == null)
            {
                client.AddPostLogoutRedirectUri(postLogoutRedirectUri);
            }
        }

        if (permissions != null)
        {
            await _permissionDataSeeder.SeedAsync(
                ClientPermissionValueProvider.ProviderName,
                name,
                permissions
            );
        }

        if (corsOrigins != null)
        {
            foreach (var origin in corsOrigins)
            {
                if (!origin.IsNullOrWhiteSpace() && client.FindCorsOrigin(origin) == null)
                {
                    client.AddCorsOrigin(origin);
                }
            }
        }

        await _clientRepository.UpdateAsync(client);
    }
}