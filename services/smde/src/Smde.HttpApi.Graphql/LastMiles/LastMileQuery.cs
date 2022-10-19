using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.LastMileManagementPermissions.LastMiles;

namespace Smde.LastMiles;

[ExtendObjectType(OperationTypeNames.Query)]
public class LastMileQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<LastMile> GetLastMileById(
        [ID(nameof(LastMile))] Guid id,
        IDataLoader<LastMile> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(LastMileFilterType))]
    public Task<IQueryable<LastMile>> GetLastMile(
        IRepository<LastMile, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<LastMileType>))]
    [UseFiltering(typeof(LastMileFilterType))]
    [UseSorting]
    public Task<IQueryable<LastMile>> GetLastMiles(
        IRepository<LastMile, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(LastMileFilterType))]
    public Task<IQueryable<LastMile>> GetLastMilesAny(
        IRepository<LastMile, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(LastMileFilterType))]
    public Task<IQueryable<LastMile>> GetLastMilesCount(
        IRepository<LastMile, Guid> repository) =>
        repository.GetQueryableAsync();
}