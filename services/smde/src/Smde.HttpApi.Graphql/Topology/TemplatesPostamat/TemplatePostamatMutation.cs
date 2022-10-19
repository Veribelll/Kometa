using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.TopologyManagementPermissions.Templates;

namespace Smde.Topology.TemplatesPostamat;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class TemplatePostamatMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TemplatePostamatNameAlreadyExistsException))]
    public Task<TemplatePostamat> CreateTemplatePostamat(
        CreateTemplatePostamatInput input,
        ITemplatePostamatService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TemplatePostamatNameAlreadyExistsException))]
    public Task<TemplatePostamat> UpdateTemplatePostamat(
        UpdateTemplatePostamatInput input,
        ITemplatePostamatService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<TemplatePostamat> DeleteTemplatePostamat(
        [ID(nameof(TemplatePostamat))] Guid id,
        ITemplatePostamatService service) =>
        service.DeleteAsync(id);
}