using Kometa.MultiContractor.Current;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp;

namespace Kometa.MultiContractor;

public abstract class HttpContractorResolveContributorBase : IContractorResolveContributor
{
    public async Task ResolveAsync(IContractorResolveContext context)
    {
        var httpContext = context.GetHttpContext();
        if (httpContext == null)
        {
            return;
        }

        try
        {
            await ResolveFromHttpContextAsync(context, httpContext);
        }
        catch (Exception e)
        {
            context.ServiceProvider
                .GetRequiredService<ILogger<HttpContractorResolveContributorBase>>()
                .LogWarning("{Error}", e.ToString());
        }
    }


    protected virtual async Task ResolveFromHttpContextAsync(IContractorResolveContext context, HttpContext httpContext)
    {
        var contractorId = await GetContractorIdFromHttpContextOrNullAsync(context, httpContext);
        if (contractorId is not null)
        {
            context.ContractorId = contractorId;
        }
    }

    protected abstract Task<Guid?> GetContractorIdFromHttpContextOrNullAsync(IContractorResolveContext context, HttpContext httpContext);
}