using System.IO.Ports;
using Volo.Abp.Domain.Values;

namespace Smde.LastMiles.Postamats.Printers;

/// <summary>
/// COM принтер
/// </summary>
public class SerialPrinter : ValueObject, IPrinter
{
    public SerialPortSettings Settings { get; set; }
        
    /// <summary>
    /// Включен
    /// </summary>
    public bool IsEnabled { get; init; }

    public SerialPrinter()
    {
        Settings = new SerialPortSettings();
    }

    public SerialPrinter(int baudRate, int dataBits, Parity parity, StopBits stopBits, string portName)
    {
        Settings = new SerialPortSettings(baudRate, dataBits, parity, stopBits, portName);
    }

    protected override IEnumerable<object> GetAtomicValues()
    {
        return new object[] { Settings, IsEnabled };
    }
}