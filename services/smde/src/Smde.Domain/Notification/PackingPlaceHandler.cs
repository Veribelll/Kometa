using Smde.LastMiles;
using Smde.Notification.Sms;
using Smde.Notification.Sms.Accounts;
using Smde.Orders;
using Smde.PackingPlaces;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Linq;
using Volo.Abp.Threading;
using Volo.Abp.Uow;

namespace Smde.Notification;

internal class PackingPlaceHandler :
    IDistributedEventHandler<PackingPlaceSendEto>,
    IDistributedEventHandler<PackingPlaceAcceptEto>,
    IDistributedEventHandler<PackingPlaceIssueEto>,
    IDistributedEventHandler<PackingPlaceReturnEto>,
    IDistributedEventHandler<PackingPlaceCancelEto>,
    ITransientDependency
{
    protected readonly IRepository<LastMile, Guid> LastMileRepository;
    protected readonly IRepository<Customer, Guid> CustomerRepository;
    protected readonly IRepository<SmsAccount, Guid> SmsAccountRepository;
    protected readonly IRepository<SmsTemplate, Guid> SmsTemplateRepository;
    protected readonly INotificationDataResolve NotificationDataResolve;
    protected readonly ISmsSenderFactory SmsSenderFactory;
    protected readonly ISmsBuilder SmsBuilder;
    protected readonly IUnitOfWorkManager UnitOfWorkManager;
    protected readonly IAsyncQueryableExecuter AsyncExecuter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public PackingPlaceHandler(
        IRepository<LastMile, Guid> lastMileRepository,
        IRepository<Customer, Guid> customerRepository,
        IRepository<SmsAccount, Guid> smsAccountRepository,
        IRepository<SmsTemplate, Guid> smsTemplateRepository,
        INotificationDataResolve notificationDataResolve,
        ISmsSenderFactory smsSenderFactory,
        ISmsBuilder smsBuilder,
        IUnitOfWorkManager unitOfWorkManager,
        IAsyncQueryableExecuter asyncExecuter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        LastMileRepository = lastMileRepository;
        CustomerRepository = customerRepository;
        SmsAccountRepository = smsAccountRepository;
        SmsTemplateRepository = smsTemplateRepository;
        NotificationDataResolve = notificationDataResolve;
        SmsSenderFactory = smsSenderFactory;
        SmsBuilder = smsBuilder;
        UnitOfWorkManager = unitOfWorkManager;
        AsyncExecuter = asyncExecuter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task HandleEventAsync(PackingPlaceSendEto eventData)
    {
        using var uow = UnitOfWorkManager.Begin(true);
        
        var arguments = new NotificationDataResolveArguments(
            eventData.LastMileId,
            eventData.Id,
            eventData.CustomerId,
            eventData.TypeOrder,
            NotificationEventType.PackingPlaceSending
        );

        await SendAsync(arguments);
        await uow.CompleteAsync();
    }

    public async Task HandleEventAsync(PackingPlaceAcceptEto eventData)
    {
        using var uow = UnitOfWorkManager.Begin(true);

        var arguments = new NotificationDataResolveArguments(
            eventData.LastMileId,
            eventData.Id,
            eventData.CustomerId,
            eventData.TypeOrder,
            NotificationEventType.PackingPlaceAccepting
        );

        await SendAsync(arguments);
        await uow.CompleteAsync();

    }

    public async Task HandleEventAsync(PackingPlaceIssueEto eventData)
    {
        using var uow = UnitOfWorkManager.Begin(true);

        var arguments = new NotificationDataResolveArguments(
            eventData.LastMileId,
            eventData.Id,
            eventData.CustomerId,
            eventData.TypeOrder,
            NotificationEventType.PackingPlaceIssuing
        );

        await SendAsync(arguments);
        await uow.CompleteAsync();

    }

    public async Task HandleEventAsync(PackingPlaceReturnEto eventData)
    {
        using var uow = UnitOfWorkManager.Begin(true);

        var arguments = new NotificationDataResolveArguments(
            eventData.LastMileId,
            eventData.Id,
            eventData.CustomerId,
            eventData.TypeOrder,
            NotificationEventType.PackingPlaceReturning
        );

        await SendAsync(arguments);
        await uow.CompleteAsync();

    }

    public async Task HandleEventAsync(PackingPlaceCancelEto eventData)
    {
        using var uow = UnitOfWorkManager.Begin(true);

        var arguments = new NotificationDataResolveArguments(
            eventData.LastMileId,
            eventData.Id,
            eventData.CustomerId,
            eventData.TypeOrder,
            NotificationEventType.PackingPlaceCanceled
        );

        await SendAsync(arguments);
        await uow.CompleteAsync();

    }

    private async Task SendAsync(NotificationDataResolveArguments arguments)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var customer = await CustomerRepository.FindAsync(x => x.Id == arguments.CustomerId,
            true, cancellationToken);

        if (customer is null)
        {
            return;
        }

        var data = await NotificationDataResolve.ResolveDataAsync(arguments);

        await SendSmsAsync(customer, arguments, data);
    }

    private async Task SendSmsAsync(
        Customer customer,
        NotificationDataResolveArguments arguments,
        NotificationDataResolveResult data)
    {
        var smsAccount = await GetSmsAccountAsync(arguments.LastMileId);
        if (smsAccount is null)
        {
            return;
        }

        var smsTemplate = await GetSmsTemplate(arguments.LastMileId, arguments.EventType);
        if (smsTemplate is null)
        {
            return;
        }

        var text = await SmsBuilder.BuildAsync(data, smsTemplate.Template);
        var sender = await SmsSenderFactory.GetAsync(smsAccount);
        await sender.QueueAsync(customer.Phone, text);
    }

    private async Task<SmsAccount?> GetSmsAccountAsync(Guid? lastMileId)
    {
        if (lastMileId is null)
        {
            return null;
        }

        var cancellationToken = CancellationTokenProvider.Token;

        var smsAccountId = await AsyncExecuter.FirstOrDefaultAsync(
            (await LastMileRepository.GetQueryableAsync())
            .Where(x => x.Id == lastMileId)
            .Select(x => x.AccountIds.SmsAccountId), cancellationToken);

        if (smsAccountId is null)
        {
            return null;
        }

        return await SmsAccountRepository.GetAsync(smsAccountId.Value, true, cancellationToken);
    }

    private async Task<SmsTemplate?> GetSmsTemplate(Guid? lastMileId, NotificationEventType eventType)
    {
        try
        {
            if (lastMileId is null)
            {
                return null;
            }

            var cancellationToken = CancellationTokenProvider.Token;

            var smsTemplateId = (await LastMileRepository.FindAsync(x => x.Id == lastMileId, true, cancellationToken))
                .SmsTemplates
                .FirstOrDefault(x => x.EventType == eventType)?
                .SmsTemplateId;

            if (smsTemplateId is null)
            {
                return null;
            }

            return await SmsTemplateRepository.GetAsync(smsTemplateId.Value, true, cancellationToken);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}