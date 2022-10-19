using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.Sizes;

public class SizeService : GraphqlService, ISizeService
{
    protected readonly IRepository<Size, Guid> Repository;
    protected readonly SizeManager Manager;

    public SizeService(
        IRepository<Size, Guid> repository,
        SizeManager manager)
    {
        Repository = repository;
        Manager = manager; ;
    }

    public async Task<Size> CreateAsync(CreateSizeInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var size = await Manager.CreateAsync(input.Name);
        await Repository.InsertAsync(size, true, cancellationToken);
        return size;
    }

    public async Task<Size> UpdateAsync(UpdateSizeInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var size = await Repository.GetAsync(input.Id, true, cancellationToken);
        await Manager.SetNameAsync(size, input.Name);
        await Repository.UpdateAsync(size, true, cancellationToken);
        return size;
    }

    public async Task<Size> DeleteAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var size = await Repository.GetAsync(id, true, cancellationToken);
        await Repository.DeleteAsync(size, true, cancellationToken);
        return size;
    }
}