namespace Kometa.Json;

[AttributeUsage(AttributeTargets.Class)]
public class DiscriminatorValueAttribute : Attribute
{
    public DiscriminatorValueAttribute(string value)
    {
        Value = value;
    }

    public string Value { get; }
}