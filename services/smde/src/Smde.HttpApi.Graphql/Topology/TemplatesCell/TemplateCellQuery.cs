using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.TopologyManagementPermissions.Templates;

namespace Smde.Topology.TemplatesCell;

[ExtendObjectType(OperationTypeNames.Query)]
public class TemplateCellQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<TemplateCell> GetTemplateCellById(
        [ID(nameof(TemplateCell))] Guid id,
        IDataLoader<TemplateCell> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(TemplateCellFilterType))]
    public Task<IQueryable<TemplateCell>> GetTemplateCell(
        IRepository<TemplateCell, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<TemplateCellType>))]
    [UseFiltering(typeof(TemplateCellFilterType))]
    [UseSorting]
    public Task<IQueryable<TemplateCell>> GetTemplatesCell(
        IRepository<TemplateCell, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(TemplateCellFilterType))]
    public Task<IQueryable<TemplateCell>> GetTemplatesCellAny(
        IRepository<TemplateCell, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(TemplateCellFilterType))]
    public Task<IQueryable<TemplateCell>> GetTemplatesCellCount(
        IRepository<TemplateCell, Guid> repository) =>
        repository.GetQueryableAsync();
}