using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Uow;

namespace Smde.Contractors;

public class ContractorDataSeeder : IContractorDataSeeder, ITransientDependency
{
    protected readonly IRepository<Company, Guid> Repository;
    protected readonly CompanyManager Manager;
    protected readonly ICurrentTenant CurrentTenant;
    protected readonly IUnitOfWorkManager UnitOfWorkManager;

    public ContractorDataSeeder(
        IRepository<Company, Guid> repository,
        CompanyManager manager,
        ICurrentTenant currentTenant,
        IUnitOfWorkManager unitOfWorkManager)
    {
        Repository = repository;
        Manager = manager;
        CurrentTenant = currentTenant;
        UnitOfWorkManager = unitOfWorkManager;
    }

    public virtual async Task SeedAsync(Guid? tenantId)
    {
        if (tenantId is not null)
        {
            return;
        }

        var uow = UnitOfWorkManager.Begin();

        if (await Repository.AnyAsync())
        {
            return;
        }

        await CreateKometaAsync();

        await uow.CompleteAsync();
    }


    private async Task CreateKometaAsync()
    {
        using (CurrentTenant.Change(null))
        {
            var company = await Manager.CreateAsync(
                new AccountBank("АО «АЛЬФА-БАНК»", "044525593", "11111111111111111111", "30101810200000000593"),
                "ООО \"АВТОКОМЕТА\"",
                "7723812864",
                "г Москва, 2-й Южнопортовый проезд, д 8 стр 2",
                "30256798",
                "772301001",
                "1117746747470");

            await Repository.InsertAsync(company, true);
        }
    }
}