using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.PackingPlaceManagementPermissions.ReturnRequests;

namespace Smde.PackingPlaces.ReturnRequests;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class ReturnRequestMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ReturnRequestCodeAlreadyExistsException))]
    [Error(typeof(ReturnRequestLocationNotSpecifiedException))]
    public Task<ReturnRequest> CreateReturnRequest(
        CreateReturnRequestInput input,
        IReturnRequestService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ReturnRequestLockedException))]
    [Error(typeof(ReturnRequestCodeAlreadyExistsException))]
    public Task<ReturnRequest> UpdateReturnRequest(
        UpdateReturnRequestInput input,
        IReturnRequestService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ReturnRequestLockedException))]
    public Task<ReturnRequest> DeleteReturnRequest(
        [ID(nameof(ReturnRequest))] Guid id,
        IReturnRequestService service) =>
        service.DeleteAsync(id);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceIncorrectStatusException))]
    [Error(typeof(ReturnRequestIncorrectStatusException))]
    public Task<ReturnRequest> CancelReturnRequest(
        [ID(nameof(ReturnRequest))] Guid id,
        IReturnRequestService service) =>
        service.CancelAsync(id);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(PackingPlaceIncorrectStatusException))]
    [Error(typeof(ReturnRequestIncorrectStatusException))]
    public Task<ReturnRequest> ReturnReturnRequest(
        [ID(nameof(ReturnRequest))] Guid id,
        IReturnRequestService service) =>
        service.ReturnAsync(id);
}