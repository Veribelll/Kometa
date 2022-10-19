using Kometa.Graphql;
using Smde.Contractors;
using Smde.Contractors.Companies;
using Smde.Contractors.IndividualEntrepreneurs;
using Smde.Identity;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.TenantManagement;

namespace Smde.Tenants;

public class TenantService : GraphqlService, ITenantService
{
    protected readonly IRepository<Tenant, Guid> Repository;
    protected readonly ITenantManager Manager;
    protected readonly ICompanyService CompanyService;
    protected readonly IIndividualEntrepreneurService IndividualEntrepreneurService;
    protected readonly IDataSeeder DataSeeder;

    public TenantService(
        IRepository<Tenant, Guid> repository,
        ITenantManager manager,
        ICompanyService companyService,
        IIndividualEntrepreneurService individualEntrepreneurService,
        IDataSeeder dataSeeder)
    {
        Repository = repository;
        Manager = manager;
        CompanyService = companyService;
        IndividualEntrepreneurService = individualEntrepreneurService;
        DataSeeder = dataSeeder;
    }

    public async Task<Tenant> CreateAsync(CreateTenantInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var tenant = await Manager.CreateAsync(input.Name);

        tenant.SetEmailForDocuments(input.EmailForDocuments);
        tenant.SetEmailForDocumentsConfirmed(false);

        await Repository.InsertAsync(tenant, true, cancellationToken);

        Contractor contractor = null!;

        using (CurrentTenant.Change(tenant.Id, tenant.Name))
        {
            var companyInput = input.Contractor.Company;
            var individualEntrepreneurInput = input.Contractor.IndividualEntrepreneur;

            if (companyInput is not null)
            {
                contractor = await CompanyService.CreateAsync(companyInput);
            }
            else if (individualEntrepreneurInput is not null)
            {
                contractor = await IndividualEntrepreneurService.CreateAsync(individualEntrepreneurInput);
            }

            await DataSeeder.SeedAsync(new DataSeedContext(tenant.Id)
                .WithProperty(SmdeIdentityDataSeedContributor.AdminEmailPropertyName, input.AdminEmailAddress)
                .WithProperty(SmdeIdentityDataSeedContributor.AdminPasswordPropertyName, input.AdminPassword)
                .WithProperty(SmdeIdentityDataSeedContributor.ContractorIdPropertyName, contractor.Id));
        }

        return tenant;
    }

    public async Task<Tenant> UpdateAsync(UpdateTenantInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var tenant = await Repository.GetAsync(input.Id, true, cancellationToken);

        await Manager.ChangeNameAsync(tenant, input.Name);

        tenant.SetEmailForDocuments(input.EmailForDocuments);
        tenant.SetEmailForDocumentsConfirmed(false);

        await Repository.UpdateAsync(tenant, true, cancellationToken);

        return tenant;
    }

    public async Task<Tenant> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var tenant = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(tenant, true, cancellationToken);
        return tenant;
    }
}