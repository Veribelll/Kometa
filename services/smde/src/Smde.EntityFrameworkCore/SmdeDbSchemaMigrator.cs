using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Smde.Data;
using Volo.Abp.DependencyInjection;

namespace Smde.EntityFrameworkCore;

public class SmdeDbSchemaMigrator
    : ISmdeDbSchemaMigrator, ITransientDependency
{
    protected readonly IServiceProvider ServiceProvider;

    public SmdeDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        ServiceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        var database = ServiceProvider
            .GetRequiredService<SmdeDbContext>()
            .Database;

#if DEBUG
        await database.EnsureDeletedAsync();
#endif

        await database.MigrateAsync();
    }
}