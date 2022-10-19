namespace Smde.Data;

public interface ISmdeDbSchemaMigrator
{
    Task MigrateAsync();
}