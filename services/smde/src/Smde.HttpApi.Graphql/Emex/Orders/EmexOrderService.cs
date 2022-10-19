using Kometa.Graphql;
using Smde.PackingPlaces;
using Volo.Abp.Domain.Repositories;

namespace Smde.Emex.Orders;

public class EmexOrderService : GraphqlService, IEmexOrderService
{
    protected readonly IRepository<EmexOrder, Guid> Repository;
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;
    protected readonly EmexOrderManager Manager;
    protected readonly EmexCustomerManager CustomerManager;

    public EmexOrderService(
        IRepository<EmexOrder, Guid> repository,
        IRepository<PackingPlace, Guid> packingPlaceRepository,
        EmexOrderManager manager,
        EmexCustomerManager customerManager)
    {
        Repository = repository;
        PackingPlaceRepository = packingPlaceRepository;
        Manager = manager;
        CustomerManager = customerManager;
    }

    public async Task<EmexOrder> CreateAsync(CreateEmexOrderInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var customer = await CreateOrUpdateCustomerAsync(input.Customer);

        var order = await Manager.CreateAsync(
            customer.Id,
            input.GlobalId,
            input.ExternalId);

        foreach (var productInput in input.Products)
        {
            var product = AddProduct(order, productInput);
            var packingPlace = await PackingPlaceRepository.GetAsync(productInput.PackingPlaceId,
                true, cancellationToken);
            order.AssignToPackingPlace(packingPlace, product.Id);
            await PackingPlaceRepository.UpdateAsync(packingPlace, true, cancellationToken);
        }

        await Repository.InsertAsync(order, true, cancellationToken);

        return order;
    }

    public async Task<EmexOrder> UpdateAsync(UpdateEmexOrderInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var customer = await CreateOrUpdateCustomerAsync(input.Customer);
        var order = await Repository.GetAsync(input.Id, true, cancellationToken);

        order.SetCustomerId(customer.Id);
        order.SetGlobalId(input.GlobalId);
        await Manager.SetExternalIdAsync(order, input.ExternalId);

        await Repository.UpdateAsync(order, true, cancellationToken);

        return order;
    }

    public async Task<EmexOrder> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var order = await Repository.GetAsync(id, true, cancellationToken);
        order.ClearProducts();
        await Repository.DeleteAsync(order, true, cancellationToken);
        return order;
    }

    public async Task<EmexProduct> CreateProductAsync(Guid orderId, EmexProductInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var order = await Repository.GetAsync(orderId, true, cancellationToken);
        var product = AddProduct(order, input);

        await Repository.UpdateAsync(order, true, cancellationToken);

        return product;
    }

    public async Task<EmexProduct> UpdateProductAsync(Guid orderId, Guid productId, EmexProductInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var order = await Repository.GetAsync(orderId, true, cancellationToken);

        var product = UpdateProduct(order, productId, input);

        await Repository.UpdateAsync(order, true, cancellationToken);

        return product;
    }

    public async Task<EmexProduct> DeleteProductAsync(Guid orderId, Guid productId)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var order = await Repository.GetAsync(orderId, true, cancellationToken);
        var product = order.DeleteProduct(productId);
        await Repository.UpdateAsync(order, true, cancellationToken);
        return product;
    }

    public async Task<EmexProduct> AssignToPackingPlace(Guid orderId, Guid productId, Guid packingPlaceId)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var order = await Repository.GetAsync(orderId, true, cancellationToken);
        var packingPlace = await PackingPlaceRepository.GetAsync(packingPlaceId, true, cancellationToken);
        var product = order.AssignToPackingPlace(packingPlace, productId);
        return product;
    }

    private EmexProduct AddProduct(EmexOrder order, EmexProductInput input) =>
        order.AddProduct(GuidGenerator.Create(), new CreateEmexProduct(
            input.TypeBalance,
            input.TypePayment,
            input.Barcode,
            input.Name,
            input.VendorCode,
            input.Manufacturer,
            input.Quantity,
            input.Price,
            input.Vat,
            input.Sum,
            input.ManufacturerCountry,
            input.ManufacturerCountryCode,
            input.Marking,
            input.Gtd));

    private static EmexProduct UpdateProduct(EmexOrder order, Guid productId, EmexProductInput input) =>
        order.UpdateProduct(productId, new UpdateEmexProduct(
            input.TypeBalance,
            input.TypePayment,
            input.Barcode,
            input.Name,
            input.VendorCode,
            input.Manufacturer,
            input.Quantity,
            input.Price,
            input.Vat,
            input.Sum,
            input.ManufacturerCountry,
            input.ManufacturerCountryCode,
            input.Marking,
            input.Gtd));

    private async Task<EmexCustomer> CreateOrUpdateCustomerAsync(EmexCustomerInput input) =>
        await CustomerManager.CreateOrUpdateAsync(
            input.Name,
            input.Phone,
            input.ExternalId,
            input.Email);
}