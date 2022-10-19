using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.Postamats.Cells;

public class CellService : GraphqlService, ICellService
{
    protected readonly IRepository<Postamat, Guid> Repository;

    public CellService(IRepository<Postamat, Guid> repository)
    {
        Repository = repository;
    }

    public async Task<Cell> CreateAsync(CreateCellInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.PostamatId, true, cancellationToken);
        var cell = postamat.Cells.Add(GuidGenerator.Create(), input.TypeCell, input.Name, input.Barcode);
        await Repository.UpdateAsync(postamat, true, cancellationToken);
        return cell;
    }

    public async Task<Cell> UpdateAsync(UpdateCellInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.PostamatId, true, cancellationToken);
        var cells = postamat.Cells;

        cells.SetName(input.CellId, input.Name);
        cells.SetBarcode(input.CellId, input.Barcode);
        cells.SetPinCode(input.CellId, input.PinCode);
        cells.SetServicePinCode(input.CellId, input.ServicePinCode);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat.Cells.GetById(input.CellId);
    }

    public async Task<Cell> ActivateAsync(Guid postamatId, Guid cellId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);
        var cell = postamat.Cells.Activate(cellId);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return cell;
    }

    public async Task<Cell> DeactivateAsync(Guid postamatId, Guid cellId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);
        var cell = postamat.Cells.Deactivate(cellId);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return cell;
    }

    public async Task<Cell> DeleteAsync(Guid postamatId, Guid cellId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);
        var cell = postamat.Cells.Remove(cellId);
        await Repository.UpdateAsync(postamat, true, cancellationToken);
        return cell;
    }
}