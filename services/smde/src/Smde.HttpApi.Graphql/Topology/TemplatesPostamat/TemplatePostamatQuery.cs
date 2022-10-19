using Kometa.Graphql.Data;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Domain.Repositories;
using static Smde.Permissions.TopologyManagementPermissions.Templates;

namespace Smde.Topology.TemplatesPostamat;

[ExtendObjectType(OperationTypeNames.Query)]
public class TemplatePostamatQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    public Task<TemplatePostamat> GetTemplatePostamatById(
        [ID(nameof(TemplatePostamat))] Guid id,
        IDataLoader<TemplatePostamat> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(id, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(TemplatePostamatFilterType))]
    public Task<IQueryable<TemplatePostamat>> GetTemplatePostamat(
        IRepository<TemplatePostamat, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<TemplatePostamatType>))]
    [UseFiltering(typeof(TemplatePostamatFilterType))]
    [UseSorting]
    public Task<IQueryable<TemplatePostamat>> GetTemplatesPostamat(
        IRepository<TemplatePostamat, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(TemplatePostamatFilterType))]
    public Task<IQueryable<TemplatePostamat>> GetTemplatesPostamatAny(
        IRepository<TemplatePostamat, Guid> repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(TemplatePostamatFilterType))]
    public Task<IQueryable<TemplatePostamat>> GetTemplatesPostamatCount(
        IRepository<TemplatePostamat, Guid> repository) =>
        repository.GetQueryableAsync();
}