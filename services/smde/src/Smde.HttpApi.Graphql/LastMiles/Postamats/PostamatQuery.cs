using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.LastMileManagementPermissions.LastMiles;

namespace Smde.LastMiles.Postamats;

[ExtendObjectType(OperationTypeNames.Query)]
public class PostamatQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<Postamat> GetPostamatById(
        [ID(nameof(LastMile))] Guid id,
        IDataLoader<Postamat> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(PostamatFilterType))]
    public Task<IQueryable<Postamat>> GetPostamat(
        IRepository<Postamat, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<PostamatType>))]
    [UseFiltering(typeof(PostamatFilterType))]
    [UseSorting]
    public Task<IQueryable<Postamat>> GetPostamats(
        IRepository<Postamat, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(PostamatFilterType))]
    public Task<IQueryable<Postamat>> GetPostamatsAny(
        IRepository<Postamat, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(PostamatFilterType))]
    public Task<IQueryable<Postamat>> GetPostamatsCount(
        IRepository<Postamat, Guid> repository) =>
        repository.GetQueryableAsync();
}