using Kometa.Graphql;

namespace Smde.Emex.Orders;

public interface IEmexOrderService : IGraphqlService
{
    Task<EmexOrder> CreateAsync(CreateEmexOrderInput input);
    Task<EmexOrder> UpdateAsync(UpdateEmexOrderInput input);
    Task<EmexOrder> DeleteAsync(Guid id);
    Task<EmexProduct> CreateProductAsync(Guid orderId, EmexProductInput input);
    Task<EmexProduct> UpdateProductAsync(Guid orderId, Guid productId, EmexProductInput input);
    Task<EmexProduct> DeleteProductAsync(Guid orderId, Guid productId);
    Task<EmexProduct> AssignToPackingPlace(Guid orderId, Guid productId, Guid packingPlaceId);
}