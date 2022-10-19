using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.PackingPlaces;

public class PackingPlaceService : GraphqlService, IPackingPlaceService
{
    protected readonly IRepository<PackingPlace, Guid> Repository;
    protected readonly PackingPlaceManager Manager;

    public PackingPlaceService(
        IRepository<PackingPlace, Guid> repository,
        PackingPlaceManager manager)
    {
        Repository = repository;
        Manager = manager;
    }

    public async Task<PackingPlace> CreateAsync(CreatePackingPlaceInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var packingPlace = await Manager.CreateAsync(
            input.TypeOrder,
            input.Barcode,
            input.LastMileId,
            input.CourierId,
            input.SizeId);

        await Repository.InsertAsync(packingPlace, true, cancellationToken);

        return packingPlace;
    }

    public async Task<PackingPlace> UpdateAsync(UpdatePackingPlaceInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var packingPlace = await Repository.GetAsync(input.Id, true, cancellationToken);

        packingPlace.SetLastMileId(input.LastMileId);
        packingPlace.SetSizeId(input.SizeId);
        await Manager.SetBarcodeAsync(packingPlace, input.Barcode);
        await Manager.SetCourierIdAsync(packingPlace, input.CourierId);

        await Repository.UpdateAsync(packingPlace, true, cancellationToken);

        return packingPlace;
    }

    public async Task<PackingPlace> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var packingPlace = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(packingPlace, true, cancellationToken);

        return packingPlace;
    }

    public async Task<PackingPlace> SendAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var packingPlace = await Repository.GetAsync(id, true, cancellationToken);
        packingPlace.Send();

        await Repository.UpdateAsync(packingPlace, true, cancellationToken);

        return packingPlace;
    }
}