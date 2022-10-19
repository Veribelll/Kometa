using Kometa.Graphql;
using Smde.LastMiles.Postamats.Printers;

namespace Smde.LastMiles.Postamats;

public interface IPostamatService : IGraphqlService
{
    Task<Postamat> CreateAsync(CreatePostamatInput input);
    Task<Postamat> UpdateAsync(UpdatePostamatInput input);
    Task<Postamat> DeleteAsync(Guid id);
    Task<ActivatedPostamat> ActivateAsync(string token);
    Task<Postamat> UpdateSettingsAsync(UpdatePostamatSettingsInput input);
    Task<Postamat> UpdateScannerAsync(UpdatePostamatScannerInput input);
    Task<Postamat> UpdateFilePrinterAsync(UpdatePostamatFilePrinterInput input);
    Task<Postamat> UpdateNetworkPrinterAsync(UpdatePostamatNetworkPrinterInput input);
    Task<Postamat> UpdateSerialPrinterAsync(UpdatePostamatSerialPrinterInput input);
    Task<Postamat> AssignLockToCellAsync(Guid postamatId, Guid cellId, Guid lockId);
    Task<bool> SendNewPinCodeAsync(Guid postamatId, string phone);
    Task<Postamat> PutPackingPlaceAsync(Guid postamatId, Guid cellId, List<Guid> packingPlaceIds);
    Task<Postamat> IssuePackingPlaceAsync(Guid postamatId, Guid cellId, string pinCode);
}