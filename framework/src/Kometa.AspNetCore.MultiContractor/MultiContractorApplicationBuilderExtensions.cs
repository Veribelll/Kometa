using Microsoft.AspNetCore.Builder;

namespace Kometa.MultiContractor;

public static class MultiContractorApplicationBuilderExtensions
{
    public static IApplicationBuilder UseMultiContractor(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<MultiContractorMiddleware>();
    }
}