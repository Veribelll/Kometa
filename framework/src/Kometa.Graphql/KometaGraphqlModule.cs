using Kometa.Graphql.Types;
using Kometa.Validation;
using HotChocolate.Configuration;
using HotChocolate.Data.Filters;
using HotChocolate.Types.Pagination;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;
using Volo.Abp.AspNetCore;
using Volo.Abp.Modularity;

namespace Kometa.Graphql;

[DependsOn(typeof(AbpAspNetCoreModule))]
[DependsOn(typeof(KometaValidationModule))]
public class KometaGraphqlModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();

        var graphql = context.Services
            .AddGraphQL()
            .AddGraphQLServer();

        var options = context.Services.ExecutePreConfiguredActions<GraphqlOptions>();

        if (options.Query)
        {
            graphql.AddQueryType(d => d.Name(OperationTypeNames.Query));
        }

        if (options.Mutation)
        {
            graphql.AddMutationType(d => d.Name(OperationTypeNames.Mutation));
        }

        if (options.Subscription)
        {
            graphql.AddSubscriptionType(s => s.Name(OperationTypeNames.Subscription));
        }

        var types = AppDomain.CurrentDomain.GetAssemblies();

        graphql
            .UseAutomaticPersistedQueryPipeline()
#if !DEBUG
            //.AddAuthorization()
#endif
            .AddGlobalObjectIdentification()
            .AddFiltering()
            .AddSorting()
            .AddProjections()
            .AddMutationConventions()
            .AddInstrumentation()
            .AddConvention<IFilterConvention>(new FilterConventionExtension(descriptor =>
            {
                descriptor.BindRuntimeType<Guid, IdOperationFilterInputType>();
            }))
            .AddErrorInterfaceType<ErrorInterfaceType>()
            .TryAddTypeInterceptor<BusinessExceptionTypeInterceptor>()
            .TryAddTypeInterceptor<ValidationTypeInterceptor>()
            .AddApolloTracing()
            .AddRedisQueryStorage(_ => ConnectionMultiplexer
                .Connect(configuration["Redis:Configuration"]).GetDatabase())
            .SetPagingOptions(new PagingOptions
            {
                IncludeTotalCount = true,
            })
            .ModifyRequestOptions(opt =>
            {
#if DEBUG
                opt.IncludeExceptionDetails = true;
#endif
            })
            .ModifyOptions(opt =>
            {
                opt.UseXmlDocumentation = true;
                opt.SortFieldsByName = true;
                opt.EnableDirectiveIntrospection = true;
                opt.DefaultDirectiveVisibility = DirectiveVisibility.Public;
                opt.StrictValidation = true;
                opt.EnableOneOf = true;
            })
            .RegisterGraphqlTypes()
            .RegisterGraphqlServices()
            .RegisterDataLoaders()
            .RegisterRepositories();

        graphql
            .InitializeOnStartup()
            .PublishSchemaDefinition(descriptor =>
            {
                var extensionsFromFile = options.ExtensionsFromFile;

                descriptor.SetName(configuration["Graphql:Schema:Name"]);

                if (extensionsFromFile is not null)
                {
                    descriptor.AddTypeExtensionsFromFile(extensionsFromFile);
                }

                descriptor.PublishToRedis(
                    "KometaGraphql",
                    _ => ConnectionMultiplexer.Connect(configuration["Redis:Configuration"]));
            });

        context.Services.AddSingleton(graphql);
    }
}