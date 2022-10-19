using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestManager : DomainService
{
    protected readonly IRepository<ShipmentRequest, Guid> Repository;
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public ShipmentRequestManager(
        IRepository<ShipmentRequest, Guid> repository,
        IRepository<PackingPlace, Guid> packingPlaceRepository,
        ICurrentContractor currentContractor,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        PackingPlaceRepository = packingPlaceRepository;
        CurrentContractor = currentContractor;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<ShipmentRequest> CreateAsync(
        ICollection<PackingPlace> packingPlaces,
        Guid lastMileId,
        Guid courierId,
        string code,
        string? cause = null,
        string? comment = null)
    {
        Check.NotNullOrEmpty(packingPlaces, nameof(packingPlaces));

        await CheckCodeAsync(code);

        var request = new ShipmentRequest(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            lastMileId,
            courierId,
            code,
            cause,
            comment);

        foreach (var packingPlace in packingPlaces)
        {
            packingPlace.AssignShipmentRequest(request);
        }

        return request;
    }

    public async Task CancelAsync(ShipmentRequest request)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        request.Cancel();
        var packingPlaces = await PackingPlaceRepository
            .GetListAsync(x => x.ShipmentRequestId == request.Id, true, cancellationToken);

        foreach (var packingPlace in packingPlaces)
        {
            packingPlace.CancelShipmentRequest();
        }

        await Repository.UpdateAsync(request, true, cancellationToken);
        await PackingPlaceRepository.UpdateManyAsync(packingPlaces, true, cancellationToken);
    }

    public async Task SetCodeAsync(ShipmentRequest request, string code)
    {
        if (request.Code == code)
        {
            return;
        }

        await CheckCodeAsync(code);

        request.SetCode(code);
    }

    private async Task CheckCodeAsync(string code)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (await Repository.AnyAsync(x => x.Code == code, cancellationToken))
        {
            throw new ShipmentRequestCodeAlreadyExistsException(code);
        }
    }
}