using Volo.Abp;

namespace Kometa.MultiContractor.Current;

public static class CurrentContractorExtensions
{
    public static Guid GetId(this ICurrentContractor currentContractor)
    {
        Check.NotNull(currentContractor, nameof(currentContractor));
        return currentContractor.Id ?? throw new AbpException("Current Contractor Id is not available!");
    }
}