using Volo.Abp.Domain.Values;

namespace Smde.LastMiles;

public class LastMileAccountIds : ValueObject
{
    public Guid? EmexAccountId { get; init; }
    public Guid? SmsAccountId { get; init; }
        
    protected override IEnumerable<object?> GetAtomicValues()
    {
        return new object?[] { EmexAccountId, SmsAccountId };
    }
}