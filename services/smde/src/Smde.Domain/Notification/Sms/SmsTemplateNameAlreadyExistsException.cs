using Volo.Abp;

namespace Smde.Notification.Sms;

public class SmsTemplateNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public SmsTemplateNameAlreadyExistsException(string name) : base("Error:SmsTemplate:001")
    {
        Name = name;
    }
}