using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;

namespace Smde.Sizes;

public class SizeDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    protected readonly IRepository<Size, Guid> Repository;
    protected readonly SizeManager Manager;
    protected readonly ICurrentTenant CurrentTenant;

    public SizeDataSeedContributor(
        IRepository<Size, Guid> repository,
        SizeManager manager,
        ICurrentTenant currentTenant)
    {
        Repository = repository;
        Manager = manager;
        CurrentTenant = currentTenant;
    }


    public async Task SeedAsync(DataSeedContext context)
    {
        using (CurrentTenant.Change(context.TenantId))
        {
            await Repository.InsertAsync(await Manager.CreateAsync("S"));
            await Repository.InsertAsync(await Manager.CreateAsync("2S"));
            await Repository.InsertAsync(await Manager.CreateAsync("M"));
            await Repository.InsertAsync(await Manager.CreateAsync("2M"));
            await Repository.InsertAsync(await Manager.CreateAsync("XXL"));
        }
    }
}