using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.TopologyManagementPermissions.Templates;

namespace Smde.Topology.TemplatesCell;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class TemplateCellMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TemplateCellNameAlreadyExistsException))]
    [Error(typeof(TemplateCellSizeIdEmptyException))]
    public Task<TemplateCell> CreateTemplateCell(
        CreateTemplateCellInput input,
        ITemplateCellService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TemplateCellNameAlreadyExistsException))]
    public Task<TemplateCell> UpdateTemplateCell(
        UpdateTemplateCellInput input,
        ITemplateCellService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<TemplateCell> DeleteTemplateCell(
        [ID(nameof(TemplateCell))] Guid id,
        ITemplateCellService service) =>
        service.DeleteAsync(id);
}