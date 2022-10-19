using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Smde.LastMiles.Postamats.Printers;
using Smde.PackingPlaces;
using Smde.Permissions;
using static Smde.Permissions.LastMileManagementPermissions.LastMiles;
using static Smde.Permissions.LastMileManagementPermissions.Postamats;

namespace Smde.LastMiles.Postamats;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class PostamatMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(LastMileExternalIdAlreadyExistsException))]
    [Error(typeof(LastMileFactoryNumberAlreadyExistsException))]
    [Error(typeof(LastMileNameAlreadyExistsException))]
    public Task<Postamat> CreatePostamat(
        CreatePostamatInput input,
        IPostamatService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(LastMileExternalIdAlreadyExistsException))]
    [Error(typeof(LastMileFactoryNumberAlreadyExistsException))]
    [Error(typeof(LastMileNameAlreadyExistsException))]
    public Task<Postamat> UpdatePostamat(
        UpdatePostamatInput input,
        IPostamatService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> DeletePostamat(
        [ID(nameof(LastMile))] Guid id,
        IPostamatService service) =>
        service.DeleteAsync(id);

    [Authorize(Policy = LastMileManagementPermissions.Postamats.Default)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<ActivatedPostamat> ActivatePostamat(
        string token,
        IPostamatService service) =>
        service.ActivateAsync(token);

    [Authorize(Policy = ManageSettings)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> UpdatePostamatSettings(
        UpdatePostamatSettingsInput input,
        IPostamatService service) =>
        service.UpdateSettingsAsync(input);

    [Authorize(Policy = ManageSettings)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> UpdatePostamatScanner(
        UpdatePostamatScannerInput input,
        IPostamatService service) =>
        service.UpdateScannerAsync(input);

    [Authorize(Policy = ManagePrinters)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> UpdatePostamatFilePrinter(
        UpdatePostamatFilePrinterInput input,
        IPostamatService service) =>
        service.UpdateFilePrinterAsync(input);

    [Authorize(Policy = ManagePrinters)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(FormatException))]
    public Task<Postamat> UpdatePostamatNetworkPrinter(
        UpdatePostamatNetworkPrinterInput input,
        IPostamatService service) =>
        service.UpdateNetworkPrinterAsync(input);

    [Authorize(Policy = ManagePrinters)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> UpdatePostamatSerialPrinter(
        UpdatePostamatSerialPrinterInput input,
        IPostamatService service) =>
        service.UpdateSerialPrinterAsync(input);

    [Authorize(Policy = LastMileManagementPermissions.Postamats.Default)]
    [UseUnitOfWork]
    [UseMutationConvention(PayloadFieldName = "result")]
    [UseAbpError]
    public Task<bool> PostamatSendNewPinCode(
        [ID(nameof(LastMile))] Guid postamatId,
        string phone,
        IPostamatService service) =>
        service.SendNewPinCodeAsync(postamatId, phone);

    [Authorize(Policy = ManageCells)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> PostamatAssignLockToCell(
        [ID(nameof(LastMile))] Guid postamatId,
        [ID(nameof(Cell))] Guid cellId,
        [ID(nameof(Lock))] Guid lockId,
        IPostamatService service) =>
        service.AssignLockToCellAsync(postamatId, cellId, lockId);

    [Authorize(Policy = PutPackingPlace)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> PutPackingPlaceInPostamat(
        [ID(nameof(LastMile))] Guid postamatId,
        [ID(nameof(Cell))] Guid cellId,
        [ID(nameof(PackingPlace))] List<Guid> packingPlaceIds,
        IPostamatService service) =>
        service.PutPackingPlaceAsync(postamatId, cellId, packingPlaceIds);

    [Authorize(Policy = IssuePackingPlace)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<Postamat> IssuePackingPlaceInPostamat(
        [ID(nameof(LastMile))] Guid postamatId,
        [ID(nameof(Cell))] Guid cellId,
        string pinCode,
        IPostamatService service) =>
        service.IssuePackingPlaceAsync(postamatId, cellId, pinCode);
}