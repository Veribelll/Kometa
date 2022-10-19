using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.PackingPlaces.ShipmentRequests;

public class ShipmentRequestService : GraphqlService, IShipmentRequestService
{
    protected readonly IRepository<ShipmentRequest, Guid> Repository;
    protected readonly ShipmentRequestManager Manager;
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;

    public ShipmentRequestService(
        IRepository<ShipmentRequest, Guid> repository,
        ShipmentRequestManager manager,
        IRepository<PackingPlace, Guid> packingPlaceRepository)
    {
        Repository = repository;
        Manager = manager;
        PackingPlaceRepository = packingPlaceRepository;
    }

    public async Task<ShipmentRequest> CreateAsync(CreateShipmentRequestInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var lastMileId = input.LastMileId;
        var packingPlaceIds = input.PackingPlaceIds;

        var packingPlaces = await PackingPlaceRepository
            .GetListAsync(x => packingPlaceIds.Contains(x.Id), true, cancellationToken);

        var request = await Manager.CreateAsync(
            packingPlaces,
            lastMileId,
            input.CourierId,
            input.Code,
            input.Cause,
            input.Comment);

        await Repository.InsertAsync(request, true, cancellationToken);
        await PackingPlaceRepository.UpdateManyAsync(packingPlaces, true, cancellationToken);

        return request;
    }

    public async Task<ShipmentRequest> UpdateAsync(UpdateShipmentRequestInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(input.Id, true, cancellationToken);

        request.CourierId = input.CourierId;
        request.SetComment(input.Comment);

        await Repository.UpdateAsync(request, true, cancellationToken);

        return request;
    }

    public async Task<ShipmentRequest> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(request, true, cancellationToken);
        return request;
    }

    public async Task<ShipmentRequest> CancelAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(id, true, cancellationToken);

        await Manager.CancelAsync(request);
        await Repository.UpdateAsync(request, true, cancellationToken);

        return request;
    }

    public async Task<ShipmentRequest> SendAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(id, true, cancellationToken);

        var packingPlaces = await PackingPlaceRepository.GetListAsync(x => x.ShipmentRequestId == request.Id,
            true, cancellationToken);

        foreach (var packingPlace in packingPlaces)
        {
            if (packingPlace.Status.CanTransitionTo(PackingPlaceStatus.Sent))
            {
                packingPlace.Send();
            }
        }

        await PackingPlaceRepository.UpdateManyAsync(packingPlaces, true, cancellationToken);
        await Repository.UpdateAsync(request, true, cancellationToken);

        return request;
    }
}