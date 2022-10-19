using System.Text.Json;
using System.Text.Json.Serialization;
using Volo.Abp.Json;

namespace Kometa.Json;

public class AbstractClassConverterFactory : JsonConverterFactory
{
    protected readonly IJsonSerializer JsonSerializer;
    protected static readonly Dictionary<Type, JsonConverter> Converters = new();
    protected JsonNamingPolicy? NamingPolicy { get; }

    public AbstractClassConverterFactory(JsonNamingPolicy? namingPolicy, IJsonSerializer jsonSerializer)
    {
        JsonSerializer = jsonSerializer;
        NamingPolicy = namingPolicy;
    }

    public override bool CanConvert(Type typeToConvert)
    {
        return typeToConvert.IsClass && typeToConvert.IsAbstract &&
               typeToConvert.IsDefined(typeof(DiscriminatorAttribute), false);
    }

    public override JsonConverter? CreateConverter(Type typeToConvert, JsonSerializerOptions options)
    {
        if (!Converters.TryGetValue(typeToConvert, out var converter))
        {
            Type converterType = typeof(AbstractClassConverter<>).MakeGenericType(typeToConvert);
            converter = (JsonConverter)Activator.CreateInstance(converterType, NamingPolicy, JsonSerializer)!;
            Converters.Add(typeToConvert, converter);
        }

        return converter;
    }
}