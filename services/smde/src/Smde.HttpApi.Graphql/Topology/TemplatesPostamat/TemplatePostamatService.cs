using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Threading;

namespace Smde.Topology.TemplatesPostamat;

public class TemplatePostamatService : GraphqlService, ITemplatePostamatService
{
    protected readonly IRepository<TemplatePostamat, Guid> Repository;
    protected readonly TemplatePostamatManager Manager;

    public TemplatePostamatService(
        IRepository<TemplatePostamat, Guid> repository,
        TemplatePostamatManager manager,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        Manager = manager;
    }

    public async Task<TemplatePostamat> CreateAsync(CreateTemplatePostamatInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var sections = input.Sections.Select(x => (x.Position, x.TemplateSectionId)).ToList();
        var templatePostamat = await Manager.CreateAsync(input.Name, sections);

        await Repository.InsertAsync(templatePostamat, true, cancellationToken);

        return templatePostamat;
    }

    public async Task<TemplatePostamat> UpdateAsync(UpdateTemplatePostamatInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var templatePostamat = await Repository.GetAsync(input.Id, true, cancellationToken);
        await Manager.SetNameAsync(templatePostamat, input.Name);
        await Repository.UpdateAsync(templatePostamat, true, cancellationToken);

        return templatePostamat;
    }

    public async Task<TemplatePostamat> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var templatePostamat = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(templatePostamat, true, cancellationToken);
        return templatePostamat;
    }
}