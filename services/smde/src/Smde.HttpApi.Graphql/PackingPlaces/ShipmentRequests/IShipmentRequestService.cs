using Kometa.Graphql;

namespace Smde.PackingPlaces.ShipmentRequests;

public interface IShipmentRequestService : IGraphqlService
{
    Task<ShipmentRequest> CreateAsync(CreateShipmentRequestInput input);
    Task<ShipmentRequest> UpdateAsync(UpdateShipmentRequestInput input);
    Task<ShipmentRequest> DeleteAsync(Guid id);
    Task<ShipmentRequest> CancelAsync(Guid id);
    Task<ShipmentRequest> SendAsync(Guid id);
}