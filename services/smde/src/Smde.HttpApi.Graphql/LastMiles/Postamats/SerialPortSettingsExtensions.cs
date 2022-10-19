namespace Smde.LastMiles.Postamats;

public static class SerialPortSettingsExtensions
{
    public static SerialPortSettings ToEntity(this SerialPortSettingsInput dto) =>
        new (dto.BaudRate, dto.DataBits, dto.Parity, dto.StopBits, dto.PortName);
}