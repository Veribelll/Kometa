using Kometa.MultiContractor.Current;
using Smde.Identity;
using Smde.Orders;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.PackingPlaces;

public class PackingPlaceManager : DomainService
{
    protected readonly IRepository<PackingPlace, Guid> Repository;
    protected readonly ISmdeIdentityUserRepository IdentityUserRepository;
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public PackingPlaceManager(
        IRepository<PackingPlace, Guid> repository,
        ISmdeIdentityUserRepository identityUserRepository,
        ICurrentContractor currentContractor,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        IdentityUserRepository = identityUserRepository;
        CurrentContractor = currentContractor;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<PackingPlace> CreateAsync(
        TypeOrder typeOrder,
        string barcode,
        Guid? lastMileId = null,
        Guid? courierId = null,
        Guid? sizeId = null)
    {
        var contractorId = CurrentContractor.GetId();

        await CheckBarcodeAsync(barcode);
        await CheckCourierIdAsync(courierId);

        return new PackingPlace(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            contractorId,
            typeOrder,
            barcode,
            lastMileId,
            courierId,
            sizeId);
    }

    public async Task SetBarcodeAsync(PackingPlace packingPlace, string barcode)
    {
        if (packingPlace.Barcode == barcode)
        {
            return;
        }

        await CheckBarcodeAsync(barcode);
        packingPlace.SetBarcode(barcode);
    }

    public async Task SetCourierIdAsync(PackingPlace packingPlace, Guid? courierId)
    {
        if (packingPlace.CourierId == courierId)
        {
            return;
        }

        await CheckCourierIdAsync(courierId);

        packingPlace.SetCourierId(courierId);
    }

    private async Task CheckBarcodeAsync(string barcode)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (await Repository.AnyAsync(x => x.Barcode == barcode, cancellationToken))
        {
            throw new PackingPlaceBarcodeAlreadyExistsException(barcode);
        }
    }

    private async Task CheckCourierIdAsync(Guid? courierId)
    {
        if (courierId is not null && !await IdentityUserRepository.IsCourierAsync(courierId.Value))
        {
            throw new PackingPlaceEmployeeIsNotCourierException(courierId.Value);
        }
    }
}