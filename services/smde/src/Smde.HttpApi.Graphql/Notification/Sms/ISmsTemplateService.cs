using Kometa.Graphql;

namespace Smde.Notification.Sms;

public interface ISmsTemplateService : IGraphqlService
{
    Task<SmsTemplate> CreateAsync(CreateSmsTemplateInput input);
    Task<SmsTemplate> UpdateAsync(UpdateSmsTemplateInput input);
    Task<SmsTemplate> DeleteAsync(Guid id);
}