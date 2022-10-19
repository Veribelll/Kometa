using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Services;

namespace Smde.Notification.Sms;

public class SmsMessageManager : DomainService
{
    protected readonly ICurrentContractor CurrentContractor;

    public SmsMessageManager(ICurrentContractor currentContractor)
    {
        CurrentContractor = currentContractor;
    }

    public Task<SmsMessage> CreateAsync(
        Guid accountId,
        string phoneNumber,
        string text)
    {
        return Task.FromResult(new SmsMessage(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            accountId,
            phoneNumber,
            text));
    }
}