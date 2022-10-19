using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Threading;
using Volo.Abp.Uow;

namespace Smde.PackingPlaces.ShipmentRequests;

internal class PackingPlaceHandler :
    IDistributedEventHandler<PackingPlaceSendEto>,
    IDistributedEventHandler<PackingPlaceAcceptEto>,
    IDistributedEventHandler<PackingPlaceReturnEto>,
    IDistributedEventHandler<PackingPlaceCancelEto>,
    ITransientDependency
{
    protected readonly IRepository<ShipmentRequest, Guid> Repository;
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;
    protected readonly IUnitOfWorkManager UnitOfWorkManager;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public PackingPlaceHandler(
        IRepository<ShipmentRequest, Guid> repository,
        IRepository<PackingPlace, Guid> packingPlaceRepository,
        IUnitOfWorkManager unitOfWorkManager,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        PackingPlaceRepository = packingPlaceRepository;
        UnitOfWorkManager = unitOfWorkManager;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task HandleEventAsync(PackingPlaceSendEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var uow = UnitOfWorkManager.Begin();
        var shipmentRequestId = eventData.ShipmentRequestId;

        if (shipmentRequestId is null)
        {
            return;
        }

        var request = await Repository.GetAsync(shipmentRequestId.Value, true, cancellationToken);

        if (request.Status.CanTransitionTo(ShipmentRequestStatus.Sent))
        {
            request.Send();
            await Repository.UpdateAsync(request, true, cancellationToken);
            await uow.CompleteAsync(cancellationToken);
        }
    }

    public async Task HandleEventAsync(PackingPlaceAcceptEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var uow = UnitOfWorkManager.Begin();
        var shipmentRequestId = eventData.ShipmentRequestId;

        if (shipmentRequestId is null)
        {
            return;
        }

        var request = await Repository.GetAsync(shipmentRequestId.Value, true, cancellationToken);
        var packingPlaces = await PackingPlaceRepository
            .GetListAsync(x => x.Id != eventData.Id && x.ShipmentRequestId == request.Id, true, cancellationToken);

        if (packingPlaces.Count < 1 || packingPlaces.All(x=> x.Status == PackingPlaceStatus.Accepted))
        {
            request.Accept();
        }
        else
        {
            if (request.Status == ShipmentRequestStatus.Sent)
            {
                request.PartiallyAccept();
            }
        }

        await Repository.UpdateAsync(request, true, cancellationToken);
        
        await uow.CompleteAsync(cancellationToken);
    }

    public async Task HandleEventAsync(PackingPlaceReturnEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var uow = UnitOfWorkManager.Begin();
        var shipmentRequestId = eventData.ShipmentRequestId;

        if (shipmentRequestId is null)
        {
            return;
        }

        var request = await Repository.GetAsync(shipmentRequestId.Value, true, cancellationToken);
        var packingPlaces = await PackingPlaceRepository
            .GetListAsync(x => x.Id != eventData.Id && x.ShipmentRequestId == request.Id, true, cancellationToken);

        if (packingPlaces.Count < 1 || packingPlaces.All(x => x.Status == PackingPlaceStatus.Returned))
        {
            request.Cancel();
        }

        await Repository.UpdateAsync(request, true, cancellationToken);

        await uow.CompleteAsync(cancellationToken);
    }

    public async Task HandleEventAsync(PackingPlaceCancelEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var uow = UnitOfWorkManager.Begin();
        var shipmentRequestId = eventData.ShipmentRequestId;

        if (shipmentRequestId is null)
        {
            return;
        }

        var request = await Repository.GetAsync(shipmentRequestId.Value, true, cancellationToken);
        var packingPlaces = await PackingPlaceRepository
            .GetListAsync(x => x.Id != eventData.Id && x.ShipmentRequestId == request.Id, true, cancellationToken);

        if (packingPlaces.All(x=>x.Status == PackingPlaceStatus.Cancelled))
        {
            if (request.Status == ShipmentRequestStatus.Created)
            {
                request.Cancel();
            }
        }
        
        
        await Repository.UpdateAsync(request, true, cancellationToken);

        await uow.CompleteAsync(cancellationToken);
    }
}