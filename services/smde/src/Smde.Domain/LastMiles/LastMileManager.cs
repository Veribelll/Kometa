using System.Security.Cryptography;
using System.Text;
using Kometa.MultiContractor.Current;
using Volo.Abp.Data;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Threading;

namespace Smde.LastMiles;

public abstract class LastMileManager : DomainService
{
    protected readonly IDataFilter DataFilter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;
    private readonly IRepository<LastMile, Guid> _repository;

    protected LastMileManager(
        IRepository<LastMile, Guid> repository,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        _repository = repository;
        DataFilter = dataFilter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task SetNameAsync(LastMile lastMile, string name)
    {
        if (lastMile.Name == name)
        {
            return;
        }

        await CheckNameAsync(name);
        lastMile.SetName(name);
    }

    public async Task SetFactoryNumberAsync(LastMile lastMile, string factoryNumber)
    {
        if (lastMile.FactoryNumber == factoryNumber)
        {
            return;
        }

        await CheckFactoryNumberAsync(factoryNumber);
        lastMile.SetFactoryNumber(factoryNumber);
    }


    public async Task SetExternalIdAsync(LastMile lastMile, string externalId)
    {
        if (lastMile.ExternalId == externalId)
        {
            return;
        }

        await CheckExternalIdAsync(externalId);
        lastMile.SetExternalId(externalId);
    }

    protected async Task CheckNameAsync(string name)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await _repository.AnyAsync(x => x.Name == name, cancellationToken))
            {
                throw new LastMileNameAlreadyExistsException(name);
            }
        }
    }

    protected async Task CheckFactoryNumberAsync(string factoryNumber)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await _repository.AnyAsync(x => x.FactoryNumber == factoryNumber, cancellationToken))
            {
                throw new LastMileFactoryNumberAlreadyExistsException(factoryNumber);
            }
        }
    }

    protected async Task CheckExternalIdAsync(string externalId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (await _repository.AnyAsync(x => x.ExternalId == externalId, cancellationToken))
            {
                throw new LastMileExternalIdAlreadyExistsException(externalId);
            }
        }
    }

    protected static Task<string> GetTokenAsync()
    {
        var token = new StringBuilder();

        for (var i = 0; i < 2; i++)
        {
            using var rng = RandomNumberGenerator.Create();
            var lenght = 4;
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

            var buffer = new byte[sizeof(uint)];

            while (lenght-- > 0)
            {
                rng.GetBytes(buffer);
                var num = BitConverter.ToUInt32(buffer, 0);
                token.Append(chars[(int)(num % chars.Length)]);
            }

            token.Append('-');
        }

        token.Remove(token.Length - 1, 1);

        return Task.FromResult(token.ToString());
    }
}