using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Smde.LastMiles;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.PackingPlaceManagementPermissions.PackingPlaces;

namespace Smde.PackingPlaces;

[ExtendObjectType(OperationTypeNames.Query)]
public class PackingPlaceQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<PackingPlace> GetPackingPlaceById(
        [ID(nameof(PackingPlace))] Guid id,
        IDataLoader<PackingPlace> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(PackingPlaceFilterType))]
    public Task<IQueryable<PackingPlace>> GetPackingPlace(
        IRepository<PackingPlace, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<PackingPlaceType>))]
    [UseFiltering(typeof(PackingPlaceFilterType))]
    [UseSorting]
    public Task<IQueryable<PackingPlace>> GetPackingPlaces(
        IRepository<PackingPlace, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(PackingPlaceFilterType))]
    public Task<IQueryable<PackingPlace>> GetPackingPlacesAny(
        IRepository<PackingPlace, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(PackingPlaceFilterType))]
    public Task<IQueryable<PackingPlace>> GetPackingPlacesCount(
        IRepository<PackingPlace, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFiltering(typeof(PackingPlaceFilterType))]
    [UseSorting]
    public async Task<IQueryable<PackingPlace>> GetPackingPlaceByLastMileId(
        [ID(nameof(LastMile))] Guid lastMileId,
        IRepository<PackingPlace, Guid> repository) =>
        (await repository.GetQueryableAsync())
        .Where(x => x.LastMileId == lastMileId);
}