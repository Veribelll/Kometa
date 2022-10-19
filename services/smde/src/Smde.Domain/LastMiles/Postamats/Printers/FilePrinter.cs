using Volo.Abp;
using Volo.Abp.Domain.Values;

namespace Smde.LastMiles.Postamats.Printers;

/// <summary>
/// Файловый принтер
/// </summary>
public class FilePrinter : ValueObject, IPrinter
{
    /// <summary>
    /// Путь к файлу
    /// </summary>
    public string FilePath { get; protected set; }

    /// <summary>
    /// Включен
    /// </summary>
    public bool IsEnabled { get; init; }
        
    public FilePrinter()
    {
        FilePath = "./";
    }

    public FilePrinter(string filePath)
    {
        FilePath = Check.NotNullOrWhiteSpace(filePath, nameof(filePath));
    }

    protected override IEnumerable<object> GetAtomicValues()
    {
        return new object[] { FilePath };
    }
}