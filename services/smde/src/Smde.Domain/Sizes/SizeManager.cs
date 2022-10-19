using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.Sizes;

public class SizeManager : DomainService
{
    protected readonly IRepository<Size, Guid> Repository;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public SizeManager(
        IRepository<Size, Guid> repository,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        Repository = repository;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task<Size> CreateAsync(string name)
    {
        await CheckNameAsync(name);
        return new Size(GuidGenerator.Create(), CurrentTenant.Id, name);
    }

    public async Task SetNameAsync(Size size, string name)
    {
        if (size.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        size.SetName(name);
    }

    private async Task CheckNameAsync(string name)
    {
        var cancellationToken = CancellationTokenProvider.Token;
            
        if (await Repository.AnyAsync(x => x.Name == name, cancellationToken))
        {
            throw new SizeNameAlreadyExistsException(name);
        }
    }
}