using Kometa.Graphql;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Repositories;

namespace Smde.Topology.TemplatesCell;

public class TemplateCellService : GraphqlService, ITemplateCellService
{
    protected readonly IRepository<TemplateCell, Guid> Repository;
    protected readonly TemplateCellManager Manager;
    protected readonly IBlobContainer BlobContainer;

    public TemplateCellService(
        IRepository<TemplateCell, Guid> repository,
        TemplateCellManager manager,
        IBlobContainer blobContainer)
    {
        Repository = repository;
        Manager = manager;
        BlobContainer = blobContainer;
    }

    public async Task<TemplateCell> CreateAsync(CreateTemplateCellInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        TemplateCell templateCell;

        if (input.IsCell)
        {
            templateCell = await Manager.CreateAsync(
                input.SizeId ?? throw new TemplateCellSizeIdEmptyException(),
                input.Name,
                input.Width,
                input.Height);
        }
        else
        {
            templateCell = await Manager.CreateAsync(
                input.Name,
                input.Width,
                input.Height);
        }

        if (input.IsImage)
        {
            templateCell.ImageUrl = $"api/topology-management/templates-cell/{templateCell.Id}/image?__tenant={CurrentTenant.Id}";
        }

        await Repository.InsertAsync(templateCell, true, cancellationToken);

        return templateCell;
    }

    public async Task<TemplateCell> UpdateAsync(UpdateTemplateCellInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var templateCell = await Repository.GetAsync(input.Id, true, cancellationToken);

        if (input.SizeId is not null)
        {
            templateCell.SetSizeId(input.SizeId.Value);
        }

        await Manager.SetNameAsync(templateCell, input.Name);

        await Repository.UpdateAsync(templateCell, true, cancellationToken);

        return templateCell;
    }

    public async Task<TemplateCell> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var templateCell = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(templateCell, true, cancellationToken);
        var nameImage = templateCell.Id.ToString();
        if (await BlobContainer.ExistsAsync(nameImage, cancellationToken))
        {
            await BlobContainer.DeleteAsync(nameImage, cancellationToken);
        }

        return templateCell;
    }
}