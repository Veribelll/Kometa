using Kometa.Graphql;

namespace Smde.Topology.TemplatesPostamat;

public interface ITemplatePostamatService : IGraphqlService
{
    Task<TemplatePostamat> CreateAsync(CreateTemplatePostamatInput input);
    Task<TemplatePostamat> UpdateAsync(UpdateTemplatePostamatInput input);
    Task<TemplatePostamat> DeleteAsync(Guid id);
}