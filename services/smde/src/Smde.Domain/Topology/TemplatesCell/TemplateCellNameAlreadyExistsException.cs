using Volo.Abp;

namespace Smde.Topology.TemplatesCell;

public class TemplateCellNameAlreadyExistsException: BusinessException
{
    public string Name { get; }

    public TemplateCellNameAlreadyExistsException(string name) : base("Error:TemplateCell:001")
    {
        Name = name;
    }
}