using System.Reflection;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate.Execution.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Reflection;

namespace Kometa.Graphql;

internal static class RegisterExtensions
{
    private static readonly MethodInfo RegisterServiceMethod =
        typeof(RequestExecutorBuilderExtensions)
            .GetMethods()
            .First(x => x.Name == "RegisterService" && x.GetParameters().Length == 2);

    public static IRequestExecutorBuilder RegisterGraphqlTypes(this IRequestExecutorBuilder builder)
    {
        var services = builder.Services;
        var typeFinder = services.GetSingletonInstance<ITypeFinder>();

        var types = typeFinder.Types
            .Where(x => typeof(IGraphqlType).IsAssignableFrom(x) &&
                        x.IsClass &&
                        !x.IsAbstract &&
                        !x.IsGenericParameter)
            .ToList();

        builder.AddTypes(types.ToArray());

        return builder;
    }

    public static IRequestExecutorBuilder RegisterDataLoaders(this IRequestExecutorBuilder builder)
    {
        var services = builder.Services;
        var types = GetTypes(services.GetSingletonInstance<ITypeFinder>());

        foreach (var type in types)
        {
            var dataLoaderType = typeof(IDataLoader<>).MakeGenericType(type);
            services.AddScoped(dataLoaderType, typeof(BaseDataLoader<>).MakeGenericType(type));

            RegisterServiceMethod
                .MakeGenericMethod(dataLoaderType)
                .Invoke(null, new object?[] { builder, ServiceKind.Default });
        }

        return builder;
    }

    public static IRequestExecutorBuilder RegisterRepositories(this IRequestExecutorBuilder builder)
    {
        var services = builder.Services;
        var types = GetTypes(services.GetSingletonInstance<ITypeFinder>());

        foreach (var type in types)
        {
            RegisterServiceMethod
                .MakeGenericMethod(typeof(IRepository<,>).MakeGenericType(type, typeof(Guid)))
                .Invoke(null, new object?[] { builder, ServiceKind.Default });
        }

        return builder;
    }

    public static IRequestExecutorBuilder RegisterGraphqlServices(this IRequestExecutorBuilder builder)
    {
        var services = builder.Services;
        var typeFinder = services.GetSingletonInstance<ITypeFinder>();
        var types = typeFinder.Types
            .Where(x =>
                x.IsAssignableTo(typeof(IGraphqlService))
                && x.IsInterface)
            .ToList();

        foreach (var type in types)
        {
            RegisterServiceMethod
                .MakeGenericMethod(type)
                .Invoke(null, new object?[] { builder, ServiceKind.Default });
        }

        return builder;
    }

    private static List<Type> GetTypes(ITypeFinder typeFinder)
    {
        var types = typeFinder.Types
            .Where(x =>
                (x.IsSubclassOf(typeof(ObjectType)) &&
                 x.BaseType is not null &&
                 typeof(IEntity<Guid>).IsAssignableFrom(x.BaseType.GenericTypeArguments.FirstOrDefault()))
                ||
                (x.IsSubclassOf(typeof(InterfaceType)) &&
                 x.BaseType is not null &&
                 typeof(IEntity<Guid>).IsAssignableFrom(x.BaseType.GenericTypeArguments.FirstOrDefault())
                 && x.BaseType.GenericTypeArguments.First().IsClass))
            .Select(x => x.BaseType!.GenericTypeArguments.First())
            .ToList();

        return types;
    }
}