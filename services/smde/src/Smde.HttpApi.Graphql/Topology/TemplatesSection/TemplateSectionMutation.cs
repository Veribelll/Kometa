using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.TopologyManagementPermissions.Templates;

namespace Smde.Topology.TemplatesSection;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class TemplateSectionMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TemplateSectionNameAlreadyExistsException))]
    public Task<TemplateSection> CreateTemplateSection(
        CreateTemplateSectionInput input,
        ITemplateSectionService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(TemplateSectionNameAlreadyExistsException))]
    public Task<TemplateSection> UpdateTemplateSection(
        UpdateTemplateSectionInput input,
        ITemplateSectionService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<TemplateSection> DeleteTemplateSection(
        [ID(nameof(TemplateSection))] Guid id,
        ITemplateSectionService service) =>
        service.DeleteAsync(id);
}