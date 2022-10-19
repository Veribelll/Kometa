using Kometa.MultiContractor.Current;
using Microsoft.AspNetCore.Http;

namespace Kometa.MultiContractor;

public class CookieContractorResolveContributor : HttpContractorResolveContributorBase
{
    protected override Task<Guid?> GetContractorIdFromHttpContextOrNullAsync(IContractorResolveContext context, HttpContext httpContext)
    {
        var isParse = Guid.TryParse(
            httpContext.Request.Cookies[ContractorResolverConstants.DefaultContractorKey],
            out var contractorId);

        return Task.FromResult<Guid?>(isParse ? contractorId : null);
    }
}