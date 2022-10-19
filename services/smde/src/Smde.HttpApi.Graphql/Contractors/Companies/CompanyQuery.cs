using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.ContractorManagementPermissions.Contractors;

namespace Smde.Contractors.Companies;

[ExtendObjectType(OperationTypeNames.Query)]
public class CompanyQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<Company> GetCompanyById(
        [ID(nameof(Contractor))] Guid id,
        IDataLoader<Company> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(CompanyFilterType))]
    public Task<IQueryable<Company>> GetCompany(
        IRepository<Company, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging]
    [UseFiltering(typeof(CompanyFilterType))]
    [UseSorting]
    public Task<IQueryable<Company>> GetCompanies(
        IRepository<Company, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(CompanyFilterType))]
    public Task<IQueryable<Company>> GetCompaniesAny(
        IRepository<Company, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(CompanyFilterType))]
    public Task<IQueryable<Company>> GetCompaniesCount(
        IRepository<Company, Guid> repository) =>
        repository.GetQueryableAsync();
}