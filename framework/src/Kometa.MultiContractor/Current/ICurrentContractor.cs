namespace Kometa.MultiContractor.Current;

public interface ICurrentContractor
{
    Guid? Id { get; }
    string? Name { get; }
    IDisposable Change(Guid? id, string? name = null);
}