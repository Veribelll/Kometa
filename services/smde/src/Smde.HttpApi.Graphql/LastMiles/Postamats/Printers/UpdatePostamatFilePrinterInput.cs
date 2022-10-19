using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats.Printers;

public class UpdatePostamatFilePrinterInput
{
    [Required]
    [ID(nameof(LastMile))] 
    public Guid PostamatId { get; set; }
        
    /// <summary>
    /// Путь к файлу
    /// </summary>
    [Required]
    public string FilePath { get; set; } = default!;

    /// <summary>
    /// Включен
    /// </summary>
    public bool IsEnabled { get; set; }
}