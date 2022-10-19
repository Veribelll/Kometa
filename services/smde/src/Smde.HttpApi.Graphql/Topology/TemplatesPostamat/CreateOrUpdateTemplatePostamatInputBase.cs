using System.ComponentModel.DataAnnotations;
using static Smde.Topology.TemplatesPostamat.TemplatePostamatConstants;

namespace Smde.Topology.TemplatesPostamat;

public abstract class CreateOrUpdateTemplatePostamatInputBase
{
    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;
}