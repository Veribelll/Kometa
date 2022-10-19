using System.Net;
using Volo.Abp;
using Volo.Abp.Domain.Values;

namespace Smde.LastMiles.Postamats.Printers;

/// <summary>
/// Сетевой принтер 
/// </summary>
public class NetworkPrinter: ValueObject, IPrinter
{
    /// <summary>
    /// IP адрес
    /// </summary>
    public IPAddress IpAddress { get; protected set; }
        
    /// <summary>
    /// Порт
    /// </summary>
    public int Port { get; protected set; }
        
    /// <summary>
    /// Циклическое подключение
    /// </summary>
    public bool ReconnectOnTimeout { get; protected set; }

    /// <summary>
    /// Включен
    /// </summary>
    public bool IsEnabled { get; init; }

    public NetworkPrinter()
    {
        IpAddress = IPAddress.None;
        Port = 0;
        ReconnectOnTimeout = false;
    }

    public NetworkPrinter(
        IPAddress ipAddress,
        int port,
        bool reconnectOnTimeout)
    {
        IpAddress = Check.NotNull(ipAddress, nameof(ipAddress));
        Port = port;
        ReconnectOnTimeout = reconnectOnTimeout;
    }
        
    protected override IEnumerable<object> GetAtomicValues()
    {
        return new object[] { IpAddress, Port, ReconnectOnTimeout };
    }
}