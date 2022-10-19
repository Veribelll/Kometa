using Volo.Abp.DependencyInjection;

namespace Smde.Data;

public class NullSmdeDbSchemaMigrator : ISmdeDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}