using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Topology.TemplatesPostamat;

public class UpdateTemplatePostamatInput: CreateOrUpdateTemplatePostamatInputBase
{
    [Required]
    [ID(nameof(TemplatePostamat))]
    public Guid Id { get; set; }
}