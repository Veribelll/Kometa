using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.PackingPlaces.ReturnRequests;

public class ReturnRequestManager : DomainService
{
    protected readonly IRepository<ReturnRequest, Guid> Repository;
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public ReturnRequestManager(
        IRepository<ReturnRequest, Guid> repository,
        IRepository<PackingPlace, Guid> packingPlaceRepository,
        ICurrentContractor currentContractor,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        PackingPlaceRepository = packingPlaceRepository;
        CurrentContractor = currentContractor;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<ReturnRequest> CreateAsync(
        PackingPlace packingPlace,
        Guid courierId,
        string code,
        string? cause = null,
        string? comment = null)
    {
        await CheckCodeAsync(code);

        var atCourierId = packingPlace.Status == PackingPlaceStatus.Sent ? packingPlace.CourierId : null;
        var atLastMileId = packingPlace.Status == PackingPlaceStatus.Accepted ? packingPlace.LastMileId : null;

        var request = new ReturnRequest(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            courierId,
            code,
            atCourierId,
            atLastMileId,
            cause,
            comment);

        packingPlace.AssignReturnRequest(request);

        return request;
    }

    public async Task ReturnAsync(ReturnRequest request)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var packingPlace = await PackingPlaceRepository.GetAsync(x => x.ReturnRequestId == request.Id,
            true, cancellationToken);

        request.Return();
        packingPlace.Return();

        await Repository.UpdateAsync(request, true, cancellationToken);
        await PackingPlaceRepository.UpdateAsync(packingPlace, true, cancellationToken);
    }

    public async Task CancelAsync(ReturnRequest request)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var packingPlace = await PackingPlaceRepository.GetAsync(x => x.ReturnRequestId == request.Id,
            true, cancellationToken);

        request.Cancel();
        packingPlace.CancelReturnRequest();

        await Repository.UpdateAsync(request, true, cancellationToken);
        await PackingPlaceRepository.UpdateAsync(packingPlace, true, cancellationToken);
    }

    public async Task SetCodeAsync(ReturnRequest request, string code)
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
            throw new ReturnRequestCodeAlreadyExistsException(code);
        }
    }
}