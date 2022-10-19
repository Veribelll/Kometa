using Volo.Abp;

namespace Smde.Topology.TemplatesSection;

public class TemplateSectionNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public TemplateSectionNameAlreadyExistsException(string name): base("Error:TemplateSection:001")
    {
        Name = name;
    }
}