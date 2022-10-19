using Microsoft.Extensions.DependencyInjection;
using Smde.Notification.Sms.Accounts;
using Volo.Abp.DependencyInjection;

namespace Smde.Notification.Sms;

public class SmsSenderFactory : ISmsSenderFactory, ITransientDependency
{
    protected readonly IServiceProvider ServiceProvider;

    public SmsSenderFactory(IServiceProvider serviceProvider)
    {
        ServiceProvider = serviceProvider;
    }

    public Task<ISmsSender> GetAsync(SmsAccount account)
    {
        ISmsSender sender = account switch
        {
            SmsCenterAccount smsCenterAccount => new SmsCenterSender(smsCenterAccount, ServiceProvider),
            _ => new NullSmsSender(ServiceProvider)
        };

        return Task.FromResult(sender);
    }
}