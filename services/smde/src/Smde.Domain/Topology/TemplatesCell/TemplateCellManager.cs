using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Topology.TemplatesCell;

public class TemplateCellManager : DomainService
{
    protected readonly IRepository<TemplateCell, Guid> Repository;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public TemplateCellManager(
        IRepository<TemplateCell, Guid> repository,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<TemplateCell> CreateAsync(
        Guid sizeId, 
        string name, 
        int width,
        int height)
    {
        await CheckNameAsync(name);
        return new TemplateCell(GuidGenerator.Create(), CurrentTenant.Id, sizeId, name, width, height);
    }

    public async Task<TemplateCell> CreateAsync(
        string name, 
        int width,
        int height)
    {
        await CheckNameAsync(name);
        return new TemplateCell(GuidGenerator.Create(), CurrentTenant.Id, name, width, height);
    }

    public async Task SetNameAsync(TemplateCell templateCell, string name)
    {
        if (templateCell.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        templateCell.SetName(name);
    }

    private async Task CheckNameAsync(string name)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        if (await Repository.AnyAsync(x => x.Name == name, cancellationToken))
        {
            throw new TemplateCellNameAlreadyExistsException(name);
        }
    }
}