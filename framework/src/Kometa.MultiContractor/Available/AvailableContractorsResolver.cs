using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Available;

public class AvailableContractorsResolver : IAvailableContractorsResolver, ITransientDependency
{
    protected readonly AvailableContractorsResolveOptions Options;
    protected readonly IServiceProvider ServiceProvider;

    public AvailableContractorsResolver(
        IOptions<AvailableContractorsResolveOptions> options,
        IServiceProvider serviceProvider)
    {
        Options = options.Value;
        ServiceProvider = serviceProvider;
    }

    public async Task<List<Guid>> ResolveAvailableContractorIdsAsync()
    {
        using var scope = ServiceProvider.CreateScope();
        var context = new AvailableContractorsResolveContext(scope.ServiceProvider);

        foreach (var resolver in Options.Resolvers)
        {
            await resolver.ResolveAsync(context);

            if (context.AvailableContractorIds is not null)
            {
                return context.AvailableContractorIds;
            }
        }

        return new List<Guid>();
    }
}