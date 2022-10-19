using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.Types;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats.Controllers;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class PromixControllerMutation : IGraphqlType
{
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ControllerNameAlreadyExistsException))]
    public Task<PromixController> CreatePromixController(
        CreatePromixControllerInput input,
        IPromixControllerService service)
        => service.CreateAsync(input);

    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ControllerNameAlreadyExistsException))]
    public Task<PromixController> UpdatePromixController(
        UpdatePromixControllerInput input,
        IPromixControllerService service)
        => service.UpdateAsync(input);

    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<PromixController> DeletePromixControllerAsync(
        [ID(nameof(LastMile))] Guid postamatId,
        [ID(nameof(ControllerBase))] Guid controllerId,
        IPromixControllerService service)
        => service.DeleteAsync(postamatId, controllerId);
}