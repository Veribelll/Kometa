using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.ContractorManagementPermissions.Contractors;

namespace Smde.Contractors;

[ExtendObjectType(OperationTypeNames.Query)]
public class ContractorQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<Contractor> GetContractorById(
        [ID(nameof(Contractor))] Guid id,
        IDataLoader<Contractor> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(ContractorFilterType))]
    public Task<IQueryable<Contractor>> GetContractor(
        IRepository<Contractor, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<ContractorType>))]
    [UseFiltering(typeof(ContractorFilterType))]
    [UseSorting]
    public Task<IQueryable<Contractor>> GetContractors(
        IRepository<Contractor, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(ContractorFilterType))]
    public Task<IQueryable<Contractor>> GetContractorsAny(
        IRepository<Contractor, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(ContractorFilterType))]
    public Task<IQueryable<Contractor>> GetContractorsCount(
        IRepository<Contractor, Guid> repository) =>
        repository.GetQueryableAsync();
}