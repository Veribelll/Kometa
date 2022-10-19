using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats.Controllers;

public class UpdatePromixControllerInput : CreateOrUpdatePromixControllerInputBase
{
    [Required]
    [ID(nameof(ControllerBase))]
    public Guid ControllerId { get; set; }
}