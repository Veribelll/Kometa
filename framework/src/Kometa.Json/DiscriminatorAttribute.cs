namespace Kometa.Json;

[AttributeUsage(AttributeTargets.Class)]
public class DiscriminatorAttribute : Attribute
{
    public string Property { get; }

    public DiscriminatorAttribute(string property)
    {
        Property = property;
    }
}