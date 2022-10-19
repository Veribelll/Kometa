using HotChocolate.Execution.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Kometa.Graphql;

public static class GraphqlExtensions
{
    public static IRequestExecutorBuilder GetGraphql(this IServiceCollection services)
    {
        return services.GetSingletonInstance<IRequestExecutorBuilder>();
    }
}