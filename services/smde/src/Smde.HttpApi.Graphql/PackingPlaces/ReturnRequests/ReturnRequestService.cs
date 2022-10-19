using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestService : GraphqlService, IReturnRequestService
{
    protected readonly IRepository<ReturnRequest, Guid> Repository;
    protected readonly ReturnRequestManager Manager;
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;

    public ReturnRequestService(
        IRepository<ReturnRequest, Guid> repository,
        ReturnRequestManager manager,
        IRepository<PackingPlace, Guid> packingPlaceRepository)
    {
        Repository = repository;
        Manager = manager;
        PackingPlaceRepository = packingPlaceRepository;
    }

    public async Task<ReturnRequest> CreateAsync(CreateReturnRequestInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var packingPlace = await PackingPlaceRepository.GetAsync(input.PackingPlaceId, true, cancellationToken);

        var request = await Manager.CreateAsync(
            packingPlace,
            input.CourierId,
            input.Code,
            input.Cause,
            input.Comment);

        await Repository.InsertAsync(request, true, cancellationToken);
        await PackingPlaceRepository.UpdateAsync(packingPlace, true, cancellationToken);

        return request;
    }

    public async Task<ReturnRequest> UpdateAsync(UpdateReturnRequestInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(input.Id, true, cancellationToken);

        request.CourierId = input.CourierId;
        request.SetComment(input.Comment);

        await Repository.UpdateAsync(request, true, cancellationToken);

        return request;
    }

    public async Task<ReturnRequest> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(request, true, cancellationToken);
        return request;
    }

    public async Task<ReturnRequest> CancelAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(id, true, cancellationToken);
        await Manager.CancelAsync(request);
        return request;
    }

    public async Task<ReturnRequest> ReturnAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var request = await Repository.GetAsync(id, true, cancellationToken);
        await Manager.ReturnAsync(request);
        return request;
    }
}