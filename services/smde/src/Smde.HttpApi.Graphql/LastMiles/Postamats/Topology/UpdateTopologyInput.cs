using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Topology.TemplatesPostamat;

namespace Smde.LastMiles.Postamats.Topology;

public class UpdateTopologyInput
{
    [ID(nameof(LastMile))]
    public Guid PostamatId { get; set; }
    
    [StringLength(20)]
    public string? PrefixName { get; set; }
    
    [StringLength(20)]
    public string? PrefixBarcode { get; set; }

    [ID(nameof(TemplatePostamat))]
    public Guid? TemplatePostamatId { get; set; }
}