using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.Emex.Orders;

public class UpdateEmexOrderInput : CreateOrUpdateEmexOrderInputBase
{
    [Required]
    [ID(nameof(EmexOrder))]
    public Guid Id { get; set; }
}