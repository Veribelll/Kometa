using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.ContractorManagementPermissions.Contractors;

namespace Smde.Contractors.IndividualEntrepreneurs;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class IndividualEntrepreneurMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ContractorNameAlreadyExistsException))]
    [Error(typeof(ContractorInnAlreadyExistsException))]
    public Task<IndividualEntrepreneur> CreateIndividualEntrepreneur(
        CreateIndividualEntrepreneurInput input,
        IIndividualEntrepreneurService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ContractorNameAlreadyExistsException))]
    [Error(typeof(ContractorInnAlreadyExistsException))]
    public Task<IndividualEntrepreneur> UpdateIndividualEntrepreneur(
        UpdateIndividualEntrepreneurInput input,
        IIndividualEntrepreneurService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ContractorHostDeletionException))]
    public Task<IndividualEntrepreneur> DeleteIndividualEntrepreneur(
        [ID(nameof(Contractor))] Guid id,
        IIndividualEntrepreneurService service) =>
        service.DeleteAsync(id);
}