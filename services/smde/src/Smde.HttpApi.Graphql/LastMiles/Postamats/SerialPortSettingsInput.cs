using System.ComponentModel.DataAnnotations;
using System.IO.Ports;

namespace Smde.LastMiles.Postamats;

public class SerialPortSettingsInput
{
    /// <summary>
    /// Скорость передачи для последовательного порта (в бодах).
    /// </summary>
    [Required]
    [Range(0, int.MaxValue)]
    public int BaudRate { get; set; }

    /// <summary>
    /// Стандартное число битов данных в байте.
    /// </summary>
    [Required]
    [Range(0, int.MaxValue)]
    public int DataBits { get; set; }

    /// <summary>
    /// Протокол контроля четности.
    /// </summary>
    [Required]
    public Parity Parity { get; set; }

    /// <summary>
    /// Стандартное число стоповых битов в байте.
    /// </summary>
    [Required]
    public StopBits StopBits { get; set; }

    /// <summary>
    /// Последовательный порт, в частности, любой из доступных портов COM.
    /// </summary>
    [Required]
    public string PortName { get; set; } = default!;
}