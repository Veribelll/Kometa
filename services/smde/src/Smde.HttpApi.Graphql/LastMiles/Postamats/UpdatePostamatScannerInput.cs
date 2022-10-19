using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats;

public class UpdatePostamatScannerInput: SerialPortSettingsInput
{
    [Required] 
    [ID(nameof(LastMile))] 
    public Guid Id { get; set; }
}