using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;
using Volo.Abp.Json;

namespace Kometa.Json;

public class AbstractClassConverter<T> : JsonConverter<T>
{
    protected readonly IJsonSerializer JsonSerializer;
    protected JsonNamingPolicy? NamingPolicy { get; }
    protected PropertyInfo DiscriminatorProperty { get; }
    protected Dictionary<string, Type> TypeMappings { get; }

    public AbstractClassConverter(JsonNamingPolicy? namingPolicy, IJsonSerializer jsonSerializer)
    {
        JsonSerializer = jsonSerializer;
        TypeMappings = new Dictionary<string, Type>();
        NamingPolicy = namingPolicy;
        var discriminatorAttribute = typeof(T).GetCustomAttribute<DiscriminatorAttribute>();

        if (discriminatorAttribute is null)
        {
            throw new NullReferenceException($"Failed to find the required '{nameof(DiscriminatorAttribute)}'");
        }

        DiscriminatorProperty = typeof(T).GetProperty(discriminatorAttribute.Property, BindingFlags.Default | BindingFlags.Public | BindingFlags.Instance)!;

        if (DiscriminatorProperty is null)
        {
            throw new NullReferenceException($"Failed to find the specified discriminator property '{discriminatorAttribute.Property}' in type '{typeof(T).Name}'");
        }

        var types = Assembly.GetAssembly(typeof(T))!.GetTypes()
            .Where(t => t.IsClass && !t.IsAbstract && t.BaseType == typeof(T))
            .ToList();

        foreach (Type type in types)
        {
            var discriminatorValueAttribute = type.GetCustomAttribute<DiscriminatorValueAttribute>();
            if (discriminatorValueAttribute is null)
            {
                continue;
            }

            var discriminatorValue = discriminatorValueAttribute.Value;

            TypeMappings.Add(discriminatorValue, type);
        }
    }

    public override T? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if (reader.TokenType != JsonTokenType.StartObject)
        {
            throw new JsonException("Start object token type expected");
        }

        using var jsonDocument = JsonDocument.ParseValue(ref reader);

        var discriminatorPropertyName = NamingPolicy?.ConvertName(DiscriminatorProperty.Name);
        if (!jsonDocument.RootElement.TryGetProperty(discriminatorPropertyName ?? "", out var discriminatorProperty))
        {
            throw new JsonException(
                $"Failed to find the required '{DiscriminatorProperty.Name}' discriminator property");
        }

        var discriminatorValue = discriminatorProperty.GetString()!;
        if (!TypeMappings.TryGetValue(discriminatorValue, out var type))
        {
            throw new JsonException(
                $"Failed to find the derived type with the specified discriminator value '{discriminatorValue}'");
        }

        var json = jsonDocument.RootElement.GetRawText();
        return (T?)JsonSerializer.Deserialize(type, json);
    }

    public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
    {
        JsonSerializer.Serialize(value);
    }
}