using Kometa.Graphql;

namespace Smde.Contractors.Companies;

public interface ICompanyService : IGraphqlService
{
    Task<Company> CreateAsync(CreateCompanyInput input);
    Task<Company> UpdateAsync(UpdateCompanyInput input);
    Task<Company> DeleteAsync(Guid id);
}