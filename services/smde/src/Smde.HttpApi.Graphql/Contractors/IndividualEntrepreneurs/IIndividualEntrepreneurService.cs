using Kometa.Graphql;

namespace Smde.Contractors.IndividualEntrepreneurs;

public interface IIndividualEntrepreneurService : IGraphqlService
{
    Task<IndividualEntrepreneur> CreateAsync(CreateIndividualEntrepreneurInput input);
    Task<IndividualEntrepreneur> UpdateAsync(UpdateIndividualEntrepreneurInput input);
    Task<IndividualEntrepreneur> DeleteAsync(Guid id);
}