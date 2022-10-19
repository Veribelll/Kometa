using Kometa.MultiContractor.Current;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Notification.Sms;

public class SmsTemplateManager : DomainService
{
    protected readonly IRepository<SmsTemplate, Guid> Repository;
    protected readonly ICurrentContractor CurrentContractor;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public SmsTemplateManager(
        IRepository<SmsTemplate, Guid> repository,
        ICurrentContractor currentContractor,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CurrentContractor = currentContractor;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<SmsTemplate> CreateAsync(
        NotificationEventType eventType,
        string name,
        string template,
        string? comment = null)
    {
        await CheckNameAsync(name);

        return new SmsTemplate(
            GuidGenerator.Create(),
            CurrentTenant.Id,
            CurrentContractor.GetId(),
            eventType,
            name,
            template,
            comment);
    }

    public async Task SetNameAsync(SmsTemplate template, string name)
    {
        if (template.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        template.SetName(name);
    }

    private async Task CheckNameAsync(string name)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        if (await Repository.AnyAsync(x => x.Name == name, cancellationToken))
        {
            throw new SmsTemplateNameAlreadyExistsException(name);
        }
    }
}