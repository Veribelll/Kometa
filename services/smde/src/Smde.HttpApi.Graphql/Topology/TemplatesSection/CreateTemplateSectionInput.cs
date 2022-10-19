using System.ComponentModel.DataAnnotations;

namespace Smde.Topology.TemplatesSection;

public class CreateTemplateSectionInput: CreateOrUpdateTemplateSectionInputBase
{
    /// <summary>
    /// Ячейки
    /// </summary>
    [Required]
    [MinLength(1)]
    public ICollection<TemplateSectionTemplateCellInput> Cells { get; set; } = default!;
}