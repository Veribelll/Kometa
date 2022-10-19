using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor.Current;

public class ContractorResolver : IContractorResolver, ITransientDependency
{
    protected readonly ContractorResolveOptions Options;
    protected readonly IServiceProvider ServiceProvider;

    public ContractorResolver(IOptions<ContractorResolveOptions> options, IServiceProvider serviceProvider)
    {
        Options = options.Value;
        ServiceProvider = serviceProvider;
    }

    public async Task<Guid?> ResolveContractorIdAsync()
    {
        using var scope = ServiceProvider.CreateScope();
        var context = new ContractorResolveContext(scope.ServiceProvider);

        foreach (var resolver in Options.Resolvers)
        {
            await resolver.ResolveAsync(context);

            if (context.ContractorId is not null)
            {
                return context.ContractorId;
            }
        }

        return null;
    }
}