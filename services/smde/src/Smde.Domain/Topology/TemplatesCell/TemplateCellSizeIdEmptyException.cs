using Volo.Abp;

namespace Smde.Topology.TemplatesCell;

public class TemplateCellSizeIdEmptyException : BusinessException
{
    public TemplateCellSizeIdEmptyException(): base("Error:TemplateCell:002")
    {
    }
}