using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Descriptors.Definitions;

namespace Kometa.Graphql.Types;

internal static class ValidationContextDataExtensions
{
    public static void AddValidators(this ObjectFieldDefinition field, ICollection<ValidationAttribute> validators)
    {
        if (!field.ContextData.TryGetValue(nameof(ValidationAttribute), out var value) ||
            value is not List<ValidationAttribute> attributes)
        {
            attributes = new List<ValidationAttribute>();
            field.ContextData[nameof(ValidationAttribute)] = attributes;
        }

        attributes.AddRange(validators);
    }
}