using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.LastMileManagementPermissions.LastMiles;

namespace Smde.LastMiles.Postamats.Controllers;

[ExtendObjectType(OperationTypeNames.Query)]
public class ControllerQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(ControllerFilterType))]
    public Task<IQueryable<ControllerBase>> GetController(
        [ID(nameof(LastMile))] Guid postamatId,
        IControllerRepository repository) =>
        GetQueryableAsync(postamatId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFiltering(typeof(ControllerFilterType))]
    [UseSorting]
    public Task<IQueryable<ControllerBase>> GetControllers(
        [ID(nameof(LastMile))] Guid postamatId,
        IControllerRepository repository) =>
        GetQueryableAsync(postamatId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(ControllerFilterType))]
    public Task<IQueryable<ControllerBase>> GetControllersAny(
        [ID(nameof(LastMile))] Guid postamatId,
        IControllerRepository repository) =>
        GetQueryableAsync(postamatId, repository);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(ControllerFilterType))]
    public Task<IQueryable<ControllerBase>> GetControllersCount(
        [ID(nameof(LastMile))] Guid postamatId,
        IControllerRepository repository) =>
        GetQueryableAsync(postamatId, repository);

    private static async Task<IQueryable<ControllerBase>> GetQueryableAsync(
        Guid postamatId,
        IControllerRepository repository) =>
        (await repository.GetQueryableAsync()).Where(x => x.PostamatId == postamatId);
}