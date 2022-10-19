using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Linq;
using static Smde.Permissions.LastMileManagementPermissions.LastMiles;

namespace Smde.LastMiles.Postamats.Cells;

[ExtendObjectType(OperationTypeNames.Query)]
public class CellQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<Cell> GetCellById(
        [ID(nameof(Cell))] Guid cellId,
        ICellRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetAsync(cellId, true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(CellFilterType))]
    public Task<IQueryable<Cell>> GetCell(
        [ID(nameof(LastMile))] Guid postamatId,
        ICellRepository repository) =>
        GetQueryableAsync(postamatId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFiltering(typeof(CellFilterType))]
    [UseSorting]
    public Task<IQueryable<Cell>> GetCells(
        [ID(nameof(LastMile))] Guid postamatId,
        ICellRepository repository) =>
        GetQueryableAsync(postamatId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(CellFilterType))]
    public Task<IQueryable<Cell>> GetCellsAny(
        [ID(nameof(LastMile))] Guid postamatId,
        ICellRepository repository) =>
        GetQueryableAsync(postamatId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public async Task<Cell?> GetCellsByPin(
        [ID(nameof(LastMile))] Guid postamatId,
        string pinCode,
        [Service] IAsyncQueryableExecuter asyncExecuter,
        ICellRepository repository) =>
        await asyncExecuter.FirstOrDefaultAsync((
            await GetQueryableAsync(postamatId, repository))
            .Where(x => x.PinCode == pinCode));

    private static async Task<IQueryable<Cell>> GetQueryableAsync(
        Guid postamatId,
        ICellRepository repository) =>
        (await repository.GetQueryableAsync()).Where(x => x.PostamatId == postamatId);
}