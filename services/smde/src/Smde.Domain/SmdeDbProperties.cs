using Kometa.Data;

namespace Smde;

public static class SmdeDbProperties
{
    public const string DbTablePrefix = KometaDbProperties.DbTablePrefix;
    public const string? DbSchema = KometaDbProperties.DbSchema;
    public const string ConnectionStringName = "Default";
}