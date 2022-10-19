using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.ContractorManagementPermissions.Contractors;

namespace Smde.Contractors.IndividualEntrepreneurs;

[ExtendObjectType(OperationTypeNames.Query)]
public class IndividualEntrepreneurQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<IndividualEntrepreneur> GetIndividualEntrepreneurById(
        [ID(nameof(Contractor))] Guid id,
        IDataLoader<IndividualEntrepreneur> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(IndividualEntrepreneurFilterType))]
    public Task<IQueryable<IndividualEntrepreneur>> GetIndividualEntrepreneur(
        IRepository<IndividualEntrepreneur, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging]
    [UseFiltering(typeof(IndividualEntrepreneurFilterType))]
    [UseSorting]
    public Task<IQueryable<IndividualEntrepreneur>> GetIndividualEntrepreneurs(
        IRepository<IndividualEntrepreneur, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(IndividualEntrepreneurFilterType))]
    public Task<IQueryable<IndividualEntrepreneur>> GetIndividualEntrepreneursAny(
        IRepository<IndividualEntrepreneur, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(IndividualEntrepreneurFilterType))]
    public Task<IQueryable<IndividualEntrepreneur>> GetIndividualEntrepreneursCount(
        IRepository<IndividualEntrepreneur, Guid> repository) =>
        repository.GetQueryableAsync();
}