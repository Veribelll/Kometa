using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Smde.LastMiles.Postamats.Cells.Exceptions;

namespace Smde.LastMiles.Postamats.Cells;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class CellMutation : IGraphqlType
{
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(CellNameAlreadyExistsException))]
    [Error(typeof(CellBarcodeAlreadyExistsException))]
    public Task<Cell> CreateCell(
        CreateCellInput input,
        ICellService service)
        => service.CreateAsync(input);

    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(CellNameAlreadyExistsException))]
    [Error(typeof(CellBarcodeAlreadyExistsException))]
    [Error(typeof(CellPinCodeAlreadyExistsException))]
    [Error(typeof(CellServicePinCodeAlreadyExistsException))]
    public Task<Cell> UpdateCell(
        UpdateCellInput input,
        ICellService service)
        => service.UpdateAsync(input);

    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Cell> ActivateCell(
        [ID(nameof(LastMile))] Guid postamatId,
        [ID(nameof(Cell))] Guid cellId,
        ICellService service)
        => service.ActivateAsync(postamatId, cellId);

    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Cell> DeactivateCell(
        [ID(nameof(LastMile))] Guid postamatId,
        [ID(nameof(Cell))] Guid cellId,
        ICellService service)
        => service.DeactivateAsync(postamatId, cellId);

    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(CellDeleteWhenNotEmptyException))]
    public Task<Cell> DeleteCell(
        [ID(nameof(LastMile))] Guid postamatId,
        [ID(nameof(Cell))] Guid cellId,
        ICellService service)
        => service.DeleteAsync(postamatId, cellId);
}