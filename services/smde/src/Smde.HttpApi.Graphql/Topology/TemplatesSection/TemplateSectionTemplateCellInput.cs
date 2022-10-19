using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Topology.TemplatesCell;

namespace Smde.Topology.TemplatesSection;

public class TemplateSectionTemplateCellInput
{
    [Required]
    [ID(nameof(TemplateCell))]
    public Guid TemplateCellId { get; set; }

    /// <summary>
    /// Позиция
    /// </summary>
    [Required]
    [Range(0, int.MaxValue)]
    public int Position { get; set; }
}