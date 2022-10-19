namespace Smde.Contractors;

public interface IContractorDataSeeder
{
    Task SeedAsync(Guid? tenantId);
}