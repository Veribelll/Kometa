using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.Notification.Sms;

public class SmsTemplateService : GraphqlService, ISmsTemplateService
{
    protected readonly IRepository<SmsTemplate, Guid> Repository;
    protected readonly SmsTemplateManager Manager;

    public SmsTemplateService(
        IRepository<SmsTemplate, Guid> repository,
        SmsTemplateManager manager)
    {
        Repository = repository;
        Manager = manager;
    }

    public async Task<SmsTemplate> CreateAsync(CreateSmsTemplateInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var template = await Manager.CreateAsync(
            input.EventType,
            input.Name,
            input.Template,
            input.Comment);

        await Repository.InsertAsync(template, true, cancellationToken);

        return template;
    }

    public async Task<SmsTemplate> UpdateAsync(UpdateSmsTemplateInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var template = await Repository.GetAsync(input.Id, true, cancellationToken);

        await Manager.SetNameAsync(template, input.Name);
        template.SetTemplate(input.Template);
        template.SetComment(input.Comment);

        await Repository.UpdateAsync(template, true, cancellationToken);

        return template;
    }

    public async Task<SmsTemplate> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var template = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(template, true, cancellationToken);
        return template;
    }
}