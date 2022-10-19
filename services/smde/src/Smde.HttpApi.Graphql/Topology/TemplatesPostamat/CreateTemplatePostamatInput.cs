using System.ComponentModel.DataAnnotations;

namespace Smde.Topology.TemplatesPostamat;

public class CreateTemplatePostamatInput: CreateOrUpdateTemplatePostamatInputBase
{
    /// <summary>
    /// Секции
    /// </summary>
    [Required]
    [MinLength(1)]
    public ICollection<TemplatePostamatTemplateSectionInput> Sections { get; set; } = default!;
}