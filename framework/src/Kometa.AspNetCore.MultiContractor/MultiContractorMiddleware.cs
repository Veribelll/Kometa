using Kometa.MultiContractor.Available;
using Kometa.MultiContractor.Current;
using Microsoft.AspNetCore.Http;
using Volo.Abp.DependencyInjection;

namespace Kometa.MultiContractor;

public class MultiContractorMiddleware : IMiddleware, ITransientDependency
{
    protected readonly IContractorConfigurationProvider ContractorConfigurationProvider;
    protected readonly IAvailableContractorsConfigurationProvider AvailableContractorsConfigurationProvider;
    protected readonly IAvailableContractors AvailableContractors;
    protected readonly ICurrentContractor CurrentContractor;

    public MultiContractorMiddleware(
        IContractorConfigurationProvider contractorConfigurationProvider,
        IAvailableContractorsConfigurationProvider availableContractorsConfigurationProvider,
        IAvailableContractors availableContractors,
        ICurrentContractor currentContractor)
    {
        ContractorConfigurationProvider = contractorConfigurationProvider;
        AvailableContractorsConfigurationProvider = availableContractorsConfigurationProvider;
        AvailableContractors = availableContractors;
        CurrentContractor = currentContractor;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var contractor = await ContractorConfigurationProvider.GetAsync();
        var availableContractors = await AvailableContractorsConfigurationProvider.GetAsync();

        using (AvailableContractors.Change(availableContractors))
        {
            using (CurrentContractor.Change(contractor?.Id, contractor?.Name))
            {
                await next(context);
            }
        }
    }
}