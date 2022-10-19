using System.ComponentModel.DataAnnotations;

namespace Smde.Topology.TemplatesCell;

public class CreateTemplateCellInput : CreateOrUpdateTemplateCellInputBase
{
    [Required]
    public bool IsCell { get; set; }

    /// <summary>
    /// Ширина
    /// </summary>
    [Required]
    [Range(1, int.MaxValue)]
    public int Width { get; set; }

    /// <summary>
    /// Высота
    /// </summary>
    [Required]
    [Range(1, int.MaxValue)]
    public int Height { get; set; }
    
    public bool IsImage { get; set; }
}