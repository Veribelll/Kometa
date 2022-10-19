using System.ComponentModel.DataAnnotations;
using static Smde.Topology.TemplatesSection.TemplateSectionConstants;

namespace Smde.Topology.TemplatesSection;

public abstract class CreateOrUpdateTemplateSectionInputBase
{
    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;
}