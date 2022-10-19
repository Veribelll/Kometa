using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.AccessKeys;

public class AccessKeyService : GraphqlService, IAccessKeyService
{
    protected readonly IRepository<LastMile, Guid> Repository;

    public AccessKeyService(IRepository<LastMile, Guid> repository)
    {
        Repository = repository;
    }

    public async Task<AccessKey> CreateAsync(CreateAccessKeyInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var lastMile = await Repository.GetAsync(input.LastMileId, true, cancellationToken);

        var accessKey = lastMile.AccessKeys.Add(
            GuidGenerator.Create(),
            input.IdentityUserId,
            input.Barcode,
            input.ExpiresDt,
            input.IsDisposable);

        await Repository.UpdateAsync(lastMile, true, cancellationToken);

        return accessKey;
    }

    public async Task<AccessKey> UpdateAsync(UpdateAccessKeyInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var lastMile = await Repository.GetAsync(input.LastMileId, true, cancellationToken);

        var accessKey = lastMile.AccessKeys.Update(
            input.Id,
            input.Barcode,
            input.ExpiresDt,
            input.IsDisposable);

        await Repository.UpdateAsync(lastMile, true, cancellationToken);

        return accessKey;
    }

    public async Task<AccessKey> DeleteAsync(Guid lastMileId, Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        var lastMile = await Repository.GetAsync(lastMileId, true, cancellationToken);
        var accessKey = lastMile.AccessKeys.Remove(id);
        await Repository.UpdateAsync(lastMile, true, cancellationToken);
        return accessKey;
    }
}