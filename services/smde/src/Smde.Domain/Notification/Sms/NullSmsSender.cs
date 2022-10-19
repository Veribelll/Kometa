using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;

namespace Smde.Notification.Sms;

public class NullSmsSender : ISmsSender, ITransientDependency
{
    protected readonly ILogger<NullSmsSender> Logger;

    public NullSmsSender(IServiceProvider serviceProvider)
    {
        Logger = serviceProvider.GetRequiredService<ILogger<NullSmsSender>>();
    }

    public Task SendAsync(string phoneNumber, string text)
    {
        Logger.Log(LogLevel.Warning, "Sending sms. Phone number: {PhoneNumber}, Message: {Message}", phoneNumber, text);
        return Task.CompletedTask;
    }

    public Task QueueAsync(string phoneNumber, string text) => SendAsync(phoneNumber, text);
}