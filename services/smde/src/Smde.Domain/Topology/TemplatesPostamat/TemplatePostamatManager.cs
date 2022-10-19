using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Topology.TemplatesPostamat;

public class TemplatePostamatManager: DomainService
{
    protected readonly IRepository<TemplatePostamat, Guid> Repository;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public TemplatePostamatManager(
        IRepository<TemplatePostamat, Guid> repository,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<TemplatePostamat> CreateAsync(
        string name,
        ICollection<(int position, Guid templateSectionId)> sections)
    {
        await CheckNameAsync(name);
        return new TemplatePostamat(GuidGenerator.Create(), CurrentTenant.Id, name, sections);
    }

    public async Task SetNameAsync(TemplatePostamat templatePostamat, string name)
    {
        if (templatePostamat.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        templatePostamat.SetName(name);
    }

    private async Task CheckNameAsync(string name )
    {
        var cancellationToken = CancellationTokenProvider.Token;
        if (await Repository.AnyAsync(x => x.Name == name, cancellationToken))
        {
            throw new TemplatePostamatNameAlreadyExistsException(name);
        }
    }
}