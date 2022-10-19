using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Topology.TemplatesSection;

namespace Smde.Topology.TemplatesPostamat;

public class TemplatePostamatTemplateSectionInput
{
    [Required]
    [ID(nameof(TemplateSection))]
    public Guid TemplateSectionId { get; set; }

    /// <summary>
    /// Позиция
    /// </summary>
    [Required]
    [Range(0, int.MaxValue)]
    public int Position { get; set; }
}