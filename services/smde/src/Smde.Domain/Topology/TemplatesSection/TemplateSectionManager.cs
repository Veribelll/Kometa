using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Topology.TemplatesSection;

public class TemplateSectionManager : DomainService
{
    protected readonly IRepository<TemplateSection, Guid> Repository;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public TemplateSectionManager(
        IRepository<TemplateSection, Guid> repository,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<TemplateSection> CreateAsync(
        string name,
        ICollection<(int position, Guid templateCellId)> cells)
    {
        await CheckNameAsync(name);
        return new TemplateSection(GuidGenerator.Create(), CurrentTenant.Id, name, cells);
    }

    public async Task SetNameAsync(TemplateSection templateSection, string name)
    {
        if (templateSection.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        templateSection.SetName(name);
    }

    private async Task CheckNameAsync(string name )
    {
        var cancellationToken = CancellationTokenProvider.Token;
        if (await Repository.AnyAsync(x => x.Name == name, cancellationToken))
        {
            throw new TemplateSectionNameAlreadyExistsException(name);
        }
    }
}