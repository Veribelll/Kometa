using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats.Printers;

public class UpdatePostamatSerialPrinterInput : SerialPortSettingsInput
{
    [Required]
    [ID(nameof(LastMile))]
    public Guid PostamatId { get; set; }
        
    /// <summary>
    /// Включен
    /// </summary>
    public bool IsEnabled { get; set; }
}