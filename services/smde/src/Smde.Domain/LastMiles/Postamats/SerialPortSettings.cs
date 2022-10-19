using System.IO.Ports;
using Volo.Abp;
using Volo.Abp.Domain.Values;

namespace Smde.LastMiles.Postamats;

public class SerialPortSettings : ValueObject
{
    /// <summary>
    /// Скорость передачи для последовательного порта (в бодах).
    /// </summary>
    public int BaudRate { get; protected set; }

    /// <summary>
    /// Стандартное число битов данных в байте.
    /// </summary>
    public int DataBits { get; protected set; }

    /// <summary>
    /// Протокол контроля четности.
    /// </summary>
    public Parity Parity { get; protected set; }

    /// <summary>
    /// Стандартное число стоповых битов в байте.
    /// </summary>
    public StopBits StopBits { get; protected set; }

    /// <summary>
    /// Последовательный порт, в частности, любой из доступных портов COM.
    /// </summary>
    public string PortName { get; protected set; }

    public SerialPortSettings()
    {
        BaudRate = 9600;
        DataBits = 8;
        Parity = Parity.None;
        StopBits = StopBits.One;
        PortName = "COM1";
    }

    public SerialPortSettings(
        int baudRate, 
        int dataBits,
        Parity parity,
        StopBits stopBits,
        string portName)
    {
        if (baudRate <= 0)
        {
            throw new ArgumentOutOfRangeException(nameof(baudRate));
        }

        if (dataBits < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(dataBits));
        }
            
        BaudRate = baudRate;
        DataBits = dataBits;
        Parity = parity;
        StopBits = stopBits;
        PortName = Check.NotNullOrWhiteSpace(
            portName, 
            nameof(portName),
            SerialPortSettingsConstants.MaxPortNameLenght);
    }

    protected override IEnumerable<object> GetAtomicValues()
    {
        return new object[] {BaudRate, DataBits, Parity, StopBits, PortName};
    }
}