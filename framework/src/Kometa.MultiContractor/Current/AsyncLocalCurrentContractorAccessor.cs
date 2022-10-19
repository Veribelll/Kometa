namespace Kometa.MultiContractor.Current;

public class AsyncLocalCurrentContractorAccessor : ICurrentContractorAccessor
{
    public static AsyncLocalCurrentContractorAccessor Instance { get; } = new();

    private readonly AsyncLocal<BasicContractorInfo?> _currentScope = new();

    public BasicContractorInfo? Current
    {
        get => _currentScope.Value;
        set => _currentScope.Value = value;
    }

    private AsyncLocalCurrentContractorAccessor()
    {
    }
}