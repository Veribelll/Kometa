using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Topology.TemplatesCell;

public class UpdateTemplateCellInput: CreateOrUpdateTemplateCellInputBase
{
    [Required] 
    [ID(nameof(TemplateCell))] 
    public Guid Id { get; set; }
}