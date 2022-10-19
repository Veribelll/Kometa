using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.SizeManagementPermissions.Sizes;

namespace Smde.Sizes;

[ExtendObjectType(OperationTypeNames.Query)]
public class SizeQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<Size> GetSizeById(
        [ID(nameof(Size))] Guid id,
        IDataLoader<Size> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(SizeFilterType))]
    public Task<IQueryable<Size>> GetSize(
        IRepository<Size, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<SizeType>))]
    [UseFiltering(typeof(SizeFilterType))]
    [UseSorting(typeof(SizeSortType))]
    public Task<IQueryable<Size>> GetSizes(
        IRepository<Size, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(SizeFilterType))]
    public Task<IQueryable<Size>> GetSizesAny(
        IRepository<Size, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(SizeFilterType))]
    public Task<IQueryable<Size>> GetSizesCount(
        IRepository<Size, Guid> repository) =>
        repository.GetQueryableAsync();
}