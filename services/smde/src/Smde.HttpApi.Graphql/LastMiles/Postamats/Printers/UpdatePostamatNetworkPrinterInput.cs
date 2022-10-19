using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats.Printers;

public class UpdatePostamatNetworkPrinterInput
{
    [Required] 
    [ID(nameof(LastMile))] 
    public Guid PostamatId { get; set; }
        
    /// <summary>
    /// IP адрес
    /// </summary>
    [Required]
    public string IpAddress { get; set; } = default!;

    /// <summary>
    /// Порт
    /// </summary>
    [Required]
    [Range(0, int.MaxValue)]
    public int Port { get; set; }

    /// <summary>
    /// Циклическое подключение
    /// </summary>
    public bool ReconnectOnTimeout { get; set; }

    /// <summary>
    /// Включен
    /// </summary>
    public bool IsEnabled { get; set; }
}