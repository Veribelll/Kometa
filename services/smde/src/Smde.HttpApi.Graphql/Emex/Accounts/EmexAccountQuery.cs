using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.EmexPermissions.Accounts;

namespace Smde.Emex.Accounts;

[ExtendObjectType(OperationTypeNames.Query)]
public class EmexAccountQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<EmexAccount> GetEmexAccountById(
        [ID(nameof(EmexAccount))] Guid id,
        IDataLoader<EmexAccount> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(EmexAccountFilterType))]
    public Task<IQueryable<EmexAccount>> GetEmexAccount(
        IRepository<EmexAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<EmexAccountType>))]
    [UseFiltering(typeof(EmexAccountFilterType))]
    [UseSorting(typeof(EmexAccountSortType))]
    public Task<IQueryable<EmexAccount>> GetEmexAccounts(
        IRepository<EmexAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(EmexAccountFilterType))]
    public Task<IQueryable<EmexAccount>> GetEmexAccountsAny(
        IRepository<EmexAccount, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(EmexAccountFilterType))]
    public Task<IQueryable<EmexAccount>> GetEmexAccountsCount(
        IRepository<EmexAccount, Guid> repository) =>
        repository.GetQueryableAsync();
}