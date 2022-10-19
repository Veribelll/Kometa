using System.Reflection;

namespace Kometa;

public static class TupleExtensions
{
    private static readonly HashSet<Type> ValueTupleTypes = new(new[]
    {
        typeof(ValueTuple<>),
        typeof(ValueTuple<,>),
        typeof(ValueTuple<,,>),
        typeof(ValueTuple<,,,>),
        typeof(ValueTuple<,,,,>),
        typeof(ValueTuple<,,,,,>),
        typeof(ValueTuple<,,,,,,>),
        typeof(ValueTuple<,,,,,,,>)
    });

    public static bool IsValueTuple(this Type type)
    {
        return type.GetTypeInfo().IsGenericType && ValueTupleTypes.Contains(type.GetGenericTypeDefinition());
    }
}