using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.TopologyManagementPermissions.Templates;

namespace Smde.Topology.TemplatesSection;

[ExtendObjectType(OperationTypeNames.Query)]
public class TemplateSectionQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<TemplateSection> GetTemplateSectionById(
        [ID(nameof(TemplateSection))] Guid id,
        IDataLoader<TemplateSection> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(TemplateSectionFilterType))]
    public Task<IQueryable<TemplateSection>> GetTemplateSection(
        IRepository<TemplateSection, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<TemplateSectionType>))]
    [UseFiltering(typeof(TemplateSectionFilterType))]
    [UseSorting]
    public Task<IQueryable<TemplateSection>> GetTemplatesSection(
        IRepository<TemplateSection, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(TemplateSectionFilterType))]
    public Task<IQueryable<TemplateSection>> GetTemplatesSectionAny(
        IRepository<TemplateSection, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(TemplateSectionFilterType))]
    public Task<IQueryable<TemplateSection>> GetTemplatesSectionCount(
        IRepository<TemplateSection, Guid> repository) =>
        repository.GetQueryableAsync();
}