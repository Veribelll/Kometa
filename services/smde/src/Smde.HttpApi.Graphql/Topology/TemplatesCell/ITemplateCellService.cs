using Kometa.Graphql;

namespace Smde.Topology.TemplatesCell;

public interface ITemplateCellService : IGraphqlService
{
    Task<TemplateCell> CreateAsync(CreateTemplateCellInput input);
    Task<TemplateCell> UpdateAsync(UpdateTemplateCellInput input);
    Task<TemplateCell> DeleteAsync(Guid id);
}