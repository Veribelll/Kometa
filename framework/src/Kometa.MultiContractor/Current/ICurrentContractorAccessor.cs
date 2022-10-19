namespace Kometa.MultiContractor.Current;

public interface ICurrentContractorAccessor
{
    BasicContractorInfo? Current { get; set; }
}