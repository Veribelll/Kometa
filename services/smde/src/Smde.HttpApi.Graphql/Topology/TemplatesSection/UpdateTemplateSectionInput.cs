using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Topology.TemplatesSection;

public class UpdateTemplateSectionInput: CreateOrUpdateTemplateSectionInputBase
{
    [Required]
    [ID(nameof(TemplateSection))]
    public Guid Id { get; set; }
}