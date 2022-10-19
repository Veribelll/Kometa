namespace Kometa.Graphql;

public class GraphqlOptions
{
    public bool Query { get; set; } = true;
    public bool Mutation { get; set; } = true;
    public bool Subscription { get; set; } = false;
    public string? ExtensionsFromFile { get; set; }
}