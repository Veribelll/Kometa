using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace Smde;

public class SmdeTestDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    public Task SeedAsync(DataSeedContext context)
    {
        return Task.CompletedTask;
    }
}