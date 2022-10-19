using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using static Smde.LastMiles.Postamats.Controllers.BaseControllerConstants;

namespace Smde.LastMiles.Postamats.Controllers;

public abstract class CreateOrUpdateBaseControllerInputBase
{
    [Required]
    [ID(nameof(LastMile))] 
    public Guid PostamatId { get; set; }
        
    /// <summary>
    /// Наименование
    /// </summary>
    [Required]
    [StringLength(MaxNameLenght)]
    public string Name { get; set; } = default!;
        
    /// <summary>
    /// Настройки serial port
    /// </summary>
    [Required]
    public SerialPortSettingsInput Settings { get; set; } = default!;
}