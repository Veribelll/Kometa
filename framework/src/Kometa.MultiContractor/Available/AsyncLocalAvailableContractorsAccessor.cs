namespace Kometa.MultiContractor.Available;

public class AsyncLocalAvailableContractorsAccessor : IAvailableContractorsAccessor
{
    public static AsyncLocalAvailableContractorsAccessor Instance { get; } = new();

    private readonly AsyncLocal<List<Guid>> _currentScope = new();

    public List<Guid> Ids
    {
        get => _currentScope.Value ?? new List<Guid>();
        set => _currentScope.Value = value;
    }

    private AsyncLocalAvailableContractorsAccessor()
    {
    }
}