using Kometa.Graphql;
using Smde.Notification;
using Smde.Orders;
using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles;

public class LastMileService : GraphqlService, ILastMileService
{
    protected readonly IRepository<LastMile, Guid> Repository;

    public LastMileService(IRepository<LastMile, Guid> repository)
    {
        Repository = repository;
    }

    public async Task<LastMile> UpdateAccountsAsync(UpdateLastMileAccountsInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var lastMile = await Repository.GetAsync(input.LastMileId, true, cancellationToken);

        lastMile.AccountIds = new LastMileAccountIds
        {
            EmexAccountId = input.EmexAccountId,
            SmsAccountId = input.SmsAccountId
        };

        await Repository.UpdateAsync(lastMile, true, cancellationToken);

        return lastMile;
    }

    public async Task<LastMileSmsTemplate> UpdateSmsTemplateAsync(UpdateLastMileSmsTemplateInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var lastMile = await Repository.GetAsync(input.LastMileId, true, cancellationToken);

        var template = lastMile.SmsTemplates.AddOrUpdate(input.SmsTemplateId, input.TypeOrder, input.EventType);

        await Repository.UpdateAsync(lastMile, true, cancellationToken);

        return template;
    }

    public async Task<LastMileSmsTemplate> DeleteSmsTemplateAsync(Guid lastMileId, TypeOrder typeOrder,
        NotificationEventType eventType)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var lastMile = await Repository.GetAsync(lastMileId, true, cancellationToken);

        var template = lastMile.SmsTemplates.Remove(typeOrder, eventType);

        await Repository.UpdateAsync(lastMile, true, cancellationToken);

        return template;
    }

    public async Task<LastMileStoragePeriod> UpdateStoragePeriodAsync(UpdateLastMileStoragePeriodInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var lastMile = await Repository.GetAsync(input.LastMileId, true, cancellationToken);
        var storagePeriod = lastMile.StoragePeriods.AddOrUpdate(input.TypeOrder, input.Period);

        await Repository.UpdateAsync(lastMile, true, cancellationToken);

        return storagePeriod;
    }

    public async Task<LastMileReturnPeriod> UpdateReturnPeriodAsync(UpdateLastMileReturnPeriodInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var lastMile = await Repository.GetAsync(input.LastMileId, true, cancellationToken);
        var returnPeriod = lastMile.ReturnPeriods.AddOrUpdate(input.TypeOrder, input.Period);

        await Repository.UpdateAsync(lastMile, true, cancellationToken);

        return returnPeriod;
    }
}