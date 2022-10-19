using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Sizes;
using static Smde.Topology.TemplatesCell.TemplateCellConstants;

namespace Smde.Topology.TemplatesCell;

/// <summary>
/// Шаблон ячейки
/// </summary>
public abstract class CreateOrUpdateTemplateCellInputBase
{
    [ID(nameof(Size))]
    public Guid? SizeId { get; set; }

    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;
}