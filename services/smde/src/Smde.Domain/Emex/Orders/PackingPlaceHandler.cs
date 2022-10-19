using Smde.Orders;
using Smde.PackingPlaces;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Linq;
using Volo.Abp.Threading;
using Volo.Abp.Uow;

namespace Smde.Emex.Orders;

internal class PackingPlaceHandler :
    IDistributedEventHandler<EntityDeletedEto<PackingPlaceEto>>,
    IDistributedEventHandler<PackingPlaceSendEto>,
    IDistributedEventHandler<PackingPlaceAcceptEto>,
    IDistributedEventHandler<PackingPlaceIssueEto>,
    IDistributedEventHandler<PackingPlaceReturnEto>,
    ITransientDependency
{
    protected readonly IRepository<EmexOrder, Guid> Repository;
    protected readonly IEmexProductRepository ProductRepository;
    protected readonly IUnitOfWorkManager UnitOfWorkManager;
    protected readonly IAsyncQueryableExecuter AsyncExecuter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public PackingPlaceHandler(
        IRepository<EmexOrder, Guid> repository,
        IEmexProductRepository productRepository,
        IUnitOfWorkManager unitOfWorkManager,
        IAsyncQueryableExecuter asyncExecuter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        ProductRepository = productRepository;
        UnitOfWorkManager = unitOfWorkManager;
        AsyncExecuter = asyncExecuter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task HandleEventAsync(EntityDeletedEto<PackingPlaceEto> eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var packingPlace = eventData.Entity; 

        if (packingPlace.TypeOrder != TypeOrder.Emex)
        {
            return;
        }

        using var uow = UnitOfWorkManager.Begin();
        var orders = await GetOrders(packingPlace.Id);

        foreach (var order in orders)
        {
            order.RemovePackingPlace(packingPlace.Id);
        }

        await Repository.UpdateManyAsync(orders, true, cancellationToken);

        await uow.CompleteAsync(cancellationToken);
    }

    public async Task HandleEventAsync(PackingPlaceSendEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (eventData.TypeOrder != TypeOrder.Emex)
        {
            return;
        }

        using var uow = UnitOfWorkManager.Begin();
        var packingPlaceId = eventData.Id;
        var orders = await GetOrders(packingPlaceId);

        foreach (var order in orders)
        {
            order.Send(packingPlaceId);
            order.Lock();
        }

        await Repository.UpdateManyAsync(orders, true, cancellationToken);

        await uow.CompleteAsync(cancellationToken);
    }

    public async Task HandleEventAsync(PackingPlaceAcceptEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (eventData.TypeOrder != TypeOrder.Emex)
        {
            return;
        }

        using var uow = UnitOfWorkManager.Begin();
        var packingPlaceId = eventData.Id;
        var orders = await GetOrders(packingPlaceId);

        foreach (var order in orders)
        {
            order.Accept(packingPlaceId);
        }

        await Repository.UpdateManyAsync(orders, true, cancellationToken);

        await uow.CompleteAsync(cancellationToken);
    }

    public async Task HandleEventAsync(PackingPlaceIssueEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (eventData.TypeOrder != TypeOrder.Emex)
        {
            return;
        }

        using var uow = UnitOfWorkManager.Begin();
        var packingPlaceId = eventData.Id;
        var orders = await GetOrders(packingPlaceId);

        foreach (var order in orders)
        {
            order.Issue(packingPlaceId);
        }

        await Repository.UpdateManyAsync(orders, true, cancellationToken);

        await uow.CompleteAsync(cancellationToken);
    }

    public async Task HandleEventAsync(PackingPlaceReturnEto eventData)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (eventData.TypeOrder != TypeOrder.Emex)
        {
            return;
        }

        using var uow = UnitOfWorkManager.Begin();
        var packingPlaceId = eventData.Id;
        var orders = await GetOrders(packingPlaceId);

        foreach (var order in orders)
        {
            order.Return(packingPlaceId);
        }

        await Repository.UpdateManyAsync(orders, true, cancellationToken);

        await uow.CompleteAsync(cancellationToken);
    }

    private async Task<List<EmexOrder>> GetOrders(Guid packingPlaceId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var orderIds = await AsyncExecuter.ToListAsync(
            (await ProductRepository.GetQueryableAsync())
            .Where(x => x.PackingPlaceId == packingPlaceId)
            .Select(x => x.OrderId)
            .Distinct(), cancellationToken);
        return await Repository.GetListAsync(x => orderIds.Contains(x.Id), true, cancellationToken);
    }
}