using Kometa.Sms.SmsCenter;
using Microsoft.Extensions.DependencyInjection;
using Smde.Notification.Sms.Accounts;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Threading;

namespace Smde.Notification.Sms;

public class SmsCenterSender : ISmsSender
{
    protected readonly SmsCenterAccount Account;
    protected readonly ISmsCenterClient Client;
    protected readonly SmsMessageManager SmsMessageManager;
    protected readonly IRepository<SmsMessage, Guid> SmsMessageRepository;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public SmsCenterSender(SmsCenterAccount account, IServiceProvider serviceProvider)
    {
        Account = account;
        Client = serviceProvider.GetRequiredService<ISmsCenterClient>();
        SmsMessageManager = serviceProvider.GetRequiredService<SmsMessageManager>();
        SmsMessageRepository = serviceProvider.GetRequiredService<IRepository<SmsMessage, Guid>>();
        CancellationTokenProvider = serviceProvider.GetRequiredService<ICancellationTokenProvider>();
    }

    public async Task SendAsync(string phoneNumber, string text)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var message = await SmsMessageManager.CreateAsync(Account.Id, phoneNumber, text);

        try
        {
            await Client.SendAsync($"+7{phoneNumber}", text, Account.Login, Account.Password);
            message.Send(true);
        }
        catch (Exception e)
        {
            message.Send(false, e.Message);
            throw;
        }
        finally
        {
            await SmsMessageRepository.InsertAsync(message, true, cancellationToken);
        }
    }

    public Task QueueAsync(string phoneNumber, string text)
    {
        return SendAsync(phoneNumber, text);
    }
}