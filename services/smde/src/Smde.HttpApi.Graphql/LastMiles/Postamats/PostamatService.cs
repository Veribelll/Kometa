using System.Net;
using Kometa.Graphql;
using Kometa.MultiContractor.Current;
using Smde.LastMiles.Postamats.Printers;
using Smde.Orders;
using Smde.PackingPlaces;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.MultiTenancy;

namespace Smde.LastMiles.Postamats;

public class PostamatService : GraphqlService, IPostamatService
{
    protected readonly IRepository<Postamat, Guid> Repository;
    protected readonly IRepository<PackingPlace, Guid> PackingPlaceRepository;
    protected readonly IRepository<Customer, Guid> CustomerRepository;
    protected readonly PostamatManager Manager;

    public PostamatService(
        IRepository<Postamat, Guid> repository,
        IRepository<PackingPlace, Guid> packingPlaceRepository,
        IRepository<Customer, Guid> customerRepository,
        PostamatManager manager)
    {
        Repository = repository;
        PackingPlaceRepository = packingPlaceRepository;
        CustomerRepository = customerRepository;
        Manager = manager;
    }

    public async Task<Postamat> CreateAsync(CreatePostamatInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Manager.CreateAsync(
            input.DefaultCourierId,
            input.Name,
            input.FactoryNumber,
            input.Address,
            input.ExternalId);

        await Repository.InsertAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> UpdateAsync(UpdatePostamatInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.Id, true, cancellationToken);

        await Manager.SetNameAsync(postamat, input.Name);
        await Manager.SetExternalIdAsync(postamat, input.ExternalId);
        await Manager.SetFactoryNumberAsync(postamat, input.FactoryNumber);
        postamat.SetAddress(input.Address);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(id, false, cancellationToken);

        postamat.AccessKeys.Clear();
        postamat.StoragePeriods.Clear();
        postamat.SmsTemplates.Clear();
        postamat.Cells.Clear();
        postamat.Controllers.Clear();
        postamat.Displays.Clear();

        await Repository.DeleteAsync(postamat, true, cancellationToken);
        return postamat;
    }

    public async Task<ActivatedPostamat> ActivateAsync(string token)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiTenant>())
        {
            using (DataFilter.Disable<IMultiContractor>())
            {
                var postamat = await Repository.FindAsync(x => x.Token == token, true, cancellationToken);

                if (postamat is null)
                {
                    throw new BusinessException(message: "Token is not found!");
                }

                postamat.Activate();

                await Repository.UpdateAsync(postamat, true, cancellationToken);

                return new ActivatedPostamat
                {
                    ContractorId = postamat.ContractorId,
                    PostamatId = postamat.Id,
                    PostamatIdRelay = postamat.Id
                };
            }
        }
    }

    public async Task<Postamat> UpdateSettingsAsync(UpdatePostamatSettingsInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.Id, true, cancellationToken);

        postamat.Settings = new PostamatSettings(
            input.IsAutoUpdate,
            input.ReceptionWaitingListOnly,
            input.AdminPhone);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> UpdateScannerAsync(UpdatePostamatScannerInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.Id, true, cancellationToken);

        postamat.Scanner = new PostamatScanner(
            input.BaudRate,
            input.DataBits,
            input.Parity,
            input.StopBits,
            input.PortName);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> UpdateFilePrinterAsync(UpdatePostamatFilePrinterInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.PostamatId, true, cancellationToken);
        postamat.FilePrinter = new FilePrinter(input.FilePath)
        {
            IsEnabled = input.IsEnabled
        };
        await Repository.UpdateAsync(postamat, true, cancellationToken);
        return postamat;
    }

    public async Task<Postamat> UpdateNetworkPrinterAsync(UpdatePostamatNetworkPrinterInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.PostamatId, true, cancellationToken);

        postamat.NetworkPrinter = new NetworkPrinter(
            IPAddress.Parse(input.IpAddress),
            input.Port,
            input.ReconnectOnTimeout)
        {
            IsEnabled = input.IsEnabled
        };

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> UpdateSerialPrinterAsync(UpdatePostamatSerialPrinterInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.PostamatId, true, cancellationToken);

        postamat.SerialPrinter = new SerialPrinter(
            input.BaudRate,
            input.DataBits,
            input.Parity,
            input.StopBits,
            input.PortName)
        {
            IsEnabled = input.IsEnabled
        };

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> AssignLockToCellAsync(Guid postamatId, Guid cellId, Guid lockId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);

        postamat.AssignLockToCell(cellId, lockId);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<bool> SendNewPinCodeAsync(Guid postamatId, string phone)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);

        var packingPlaceIds = postamat.Cells.GetPackingPlaceIds();

        var packingPlaces = await PackingPlaceRepository.GetListAsync(x => packingPlaceIds.Contains(x.Id),
            false, cancellationToken);

        var customerIds = packingPlaces.Select(x => x.CustomerId).ToList();

        var customer = await CustomerRepository.FindAsync(x => customerIds.Contains(x.Id) && x.Phone == phone,
            true, cancellationToken);

        if (customer is not null)
        {
            var packingPlace = packingPlaces.First(x => x.CustomerId == customer.Id);
            var cell = postamat.Cells.First(x => x.Places.Any(p => p.PackingPlaceId == packingPlace.SizeId));
            // TODO: Send
        }


        return true;
    }

    public async Task<Postamat> PutPackingPlaceAsync(Guid postamatId, Guid cellId, List<Guid> packingPlaceIds)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);

        foreach (var packingPlaceId in packingPlaceIds)
        {
            await Manager.PutPackingPlaceAsync(postamat, cellId, packingPlaceId);
        }

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }

    public async Task<Postamat> IssuePackingPlaceAsync(Guid postamatId, Guid cellId, string pinCode)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);

        await Manager.IssuePackingPlaceAsync(postamat, cellId, pinCode);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return postamat;
    }
}