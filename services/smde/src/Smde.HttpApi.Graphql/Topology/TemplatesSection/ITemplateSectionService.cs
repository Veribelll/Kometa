using Kometa.Graphql;

namespace Smde.Topology.TemplatesSection;

public interface ITemplateSectionService : IGraphqlService
{
    Task<TemplateSection> CreateAsync(CreateTemplateSectionInput input);
    Task<TemplateSection> UpdateAsync(UpdateTemplateSectionInput input);
    Task<TemplateSection> DeleteAsync(Guid id);
}