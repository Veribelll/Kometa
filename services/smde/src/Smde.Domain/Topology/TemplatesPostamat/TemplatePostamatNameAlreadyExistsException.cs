using Volo.Abp;

namespace Smde.Topology.TemplatesPostamat;

public class TemplatePostamatNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public TemplatePostamatNameAlreadyExistsException(string name) : base("Error:TemplatePostamat:001")
    {
        Name = name;
    }
}