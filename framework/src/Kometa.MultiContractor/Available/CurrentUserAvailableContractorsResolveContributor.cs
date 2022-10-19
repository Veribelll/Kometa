using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Users;

namespace Kometa.MultiContractor.Available;

public class CurrentUserAvailableContractorsResolveContributor : IAvailableContractorsResolveContributor
{
    public async Task ResolveAsync(IAvailableContractorsResolveContext context)
    {
        var currentUser = context.ServiceProvider.GetRequiredService<ICurrentUser>();

        if (currentUser.IsAuthenticated)
        {
            var contractorStore = context.ServiceProvider.GetRequiredService<IContractorStore>();
            var contractors = await contractorStore.GetAvailableContractorsAsync(currentUser.GetId());
            context.AvailableContractorIds = contractors.Select(x => x.Id).ToList();
        }
    }
}