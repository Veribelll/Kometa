using Kometa.Graphql;

namespace Smde.PackingPlaces.ReturnRequests;

public interface IReturnRequestService : IGraphqlService
{
    Task<ReturnRequest> CreateAsync(CreateReturnRequestInput input);
    Task<ReturnRequest> UpdateAsync(UpdateReturnRequestInput input);
    Task<ReturnRequest> DeleteAsync(Guid id);
    Task<ReturnRequest> CancelAsync(Guid id);
    Task<ReturnRequest> ReturnAsync(Guid id);
}