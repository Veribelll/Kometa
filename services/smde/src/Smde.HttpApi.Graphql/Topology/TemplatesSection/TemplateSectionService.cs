using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.Topology.TemplatesSection;

public class TemplateSectionService : GraphqlService, ITemplateSectionService
{
    protected readonly IRepository<TemplateSection, Guid> Repository;
    protected readonly TemplateSectionManager Manager;

    public TemplateSectionService(
        IRepository<TemplateSection, Guid> repository,
        TemplateSectionManager manager)
    {
        Repository = repository;
        Manager = manager;
    }

    public async Task<TemplateSection> CreateAsync(CreateTemplateSectionInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var cells = input.Cells.Select(c => (c.Position, c.TemplateCellId)).ToList();
        var templateSection = await Manager.CreateAsync(input.Name, cells);

        await Repository.InsertAsync(templateSection, true, cancellationToken);

        return templateSection;
    }

    public async Task<TemplateSection> UpdateAsync(UpdateTemplateSectionInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var templateSection = await Repository.GetAsync(input.Id, true, cancellationToken);

        await Manager.SetNameAsync(templateSection, input.Name);

        await Repository.UpdateAsync(templateSection, true, cancellationToken);

        return templateSection;
    }

    public async Task<TemplateSection> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var templateSection = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(templateSection, true, cancellationToken);
        return templateSection;
    }
}