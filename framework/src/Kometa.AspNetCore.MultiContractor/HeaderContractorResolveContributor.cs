using Kometa.MultiContractor.Current;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Kometa.MultiContractor;

public class HeaderContractorResolveContributor : HttpContractorResolveContributorBase
{
    protected override Task<Guid?> GetContractorIdFromHttpContextOrNullAsync(IContractorResolveContext context, HttpContext httpContext)
    {
        var logger = context
            .ServiceProvider
            .GetRequiredService<ILogger<HeaderContractorResolveContributor>>();

        if (httpContext.Request.Headers.IsNullOrEmpty())
        {
            return Task.FromResult<Guid?>(null);
        }

        const string key = ContractorResolverConstants.DefaultContractorKey;
        var header = httpContext.Request.Headers[key];

        if (header == string.Empty || header.Count < 1)
        {
            return Task.FromResult<Guid?>(null);
        }

        if (header.Count > 1)
        {
            logger.LogWarning("HTTP request includes more than one {ContractorKey} header value. First one will be used. All of them: {Headers}",
                key, header.JoinAsString(", "));
        }

        var isParse = Guid.TryParse(header.First(), out var contractorId);

        if (!isParse)
        {
            logger.LogWarning("Contractor id not parse. Use null.");
            return Task.FromResult<Guid?>(null);
        }

        return Task.FromResult<Guid?>(contractorId);
    }
}