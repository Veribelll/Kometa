using System.IO.Ports;

namespace Smde.LastMiles.Postamats;

public class PostamatScanner : SerialPortSettings
{
    public PostamatScanner()
    {
    }

    public PostamatScanner(
        int baudRate,
        int dataBits,
        Parity parity,
        StopBits stopBits,
        string portName) : base(baudRate, dataBits, parity, stopBits, portName)
    {
    }
}