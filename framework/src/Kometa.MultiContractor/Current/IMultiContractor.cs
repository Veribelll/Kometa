namespace Kometa.MultiContractor.Current;

public interface IMultiContractor
{
    /// <summary>
    /// Ид контрагента
    /// </summary>
    Guid ContractorId { get; }
}