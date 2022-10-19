using Kometa.MultiContractor.Current;
using Smde.LastMiles.Postamats.Exceptions;
using Smde.PackingPlaces;
using Volo.Abp;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Threading;

namespace Smde.LastMiles.Postamats;

public class PostamatManager : LastMileManager
{
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;
    protected readonly ICurrentContractor CurrentContractor;

    public PostamatManager(
        IRepository<LastMile, Guid> lastMileRepository,
        IRepository<PackingPlace, Guid> packingPlaceRepository,
        ICurrentContractor currentContractor,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider)
        : base(lastMileRepository, dataFilter, cancellationTokenProvider)
    {
        PackingPlaceRepository = packingPlaceRepository;
        CurrentContractor = currentContractor;
    }

    public async Task<Postamat> CreateAsync(
        Guid defaultCourierId,
        string name,
        string factoryNumber,
        string address,
        string externalId)
    {
        await CheckNameAsync(name);
        await CheckExternalIdAsync(externalId);
        await CheckFactoryNumberAsync(factoryNumber);

        var token = await GetTokenAsync();

        return new Postamat(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            defaultCourierId,
            name,
            token,
            address,
            factoryNumber,
            externalId);
    }

    public async Task PutPackingPlaceAsync(Postamat postamat, Guid cellId, Guid packingPlaceId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var packingPlace = await PackingPlaceRepository.GetAsync(packingPlaceId, true, cancellationToken);
        var cell = postamat.Cells.GetById(cellId);

        var packingPlaceIds = cell.Places.Select(x => x.PackingPlaceId).ToList();
        var packingPlaces = await PackingPlaceRepository.GetListAsync(x => packingPlaceIds.Contains(x.Id),
            true, cancellationToken);

        if (packingPlaces.Any(x => x.TypeOrder != packingPlace.TypeOrder))
        {
            throw new PostamatPutPackingPlaceNotEqualTypeOrderException();
        }

        if (packingPlaces.Any(x => x.CustomerId != packingPlace.CustomerId))
        {
            throw new PostamatPutPackingPlaceNotEqualCustomerIdException();
        }

        postamat.PutPackingPlace(packingPlace, cellId);
        packingPlace.Accept();

        await PackingPlaceRepository.UpdateAsync(packingPlace, true, cancellationToken);
    }

    public async Task IssuePackingPlaceAsync(Postamat postamat, Guid cellId, string pinCode)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var cell = postamat.Cells.GetById(cellId);
        var packingPlaceIds = cell.Places.Select(x => x.PackingPlaceId).ToList();

        var packingPlaces = await PackingPlaceRepository.GetListAsync(x => packingPlaceIds.Contains(x.Id),
            true, cancellationToken);

        foreach (var packingPlace in packingPlaces)
        {
            packingPlace.Issue();
        }

        postamat.IssuePackingPlace(cellId);

        await PackingPlaceRepository.UpdateManyAsync(packingPlaces, true, cancellationToken);
    }
}