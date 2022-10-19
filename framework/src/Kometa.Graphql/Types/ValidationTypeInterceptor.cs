using System.ComponentModel.DataAnnotations;
using System.Reflection;
using System.Text;
using Kometa.Validation;
using HotChocolate.Configuration;
using HotChocolate.Resolvers;
using HotChocolate.Types.Descriptors.Definitions;

namespace Kometa.Graphql.Types;

public class ValidationTypeInterceptor : TypeInterceptor
{
    public override void OnAfterCompleteName(ITypeCompletionContext completionContext, DefinitionBase? definition,
        IDictionary<string, object?> contextData)
    {
        if (definition is InputObjectTypeDefinition inputObjectType)
        {
            foreach (var field in inputObjectType.Fields)
            {
                var property = field.Property;

                if (property is null)
                {
                    return;
                }

                var attrs = GetValidationAttributes(property);

                AddDescriptionField(field, attrs);
            }
        }
    }

    public override void OnBeforeCompleteType(ITypeCompletionContext completionContext, DefinitionBase? definition,
        IDictionary<string, object?> contextData)
    {
        if (definition is not ObjectTypeDefinition def)
        {
            return;
        }

        foreach (var field in def.Fields)
        {
            foreach (var argument in field.Arguments)
            {
                if (argument.Parameter is null)
                {
                    continue;
                }

                field.MiddlewareDefinitions.AddLast(new FieldMiddlewareDefinition(
                    FieldClassMiddlewareFactory.Create<ValidationMiddleware>(),
                    false,
                    ValidationMiddleware.MiddlewareIdentifier));
            }
        }
    }

    private static void AddDescriptionField(InputFieldDefinition field, ICollection<ValidationAttribute> attrs)
    {
        var description = new StringBuilder();

        if (!string.IsNullOrWhiteSpace(field.Description))
        {
            description.AppendLine(field.Description);
        }

        foreach (var attr in attrs)
        {
            if (attr is RequiredAttribute)
            {
                description.AppendLine("Required");
            }

            if (attr is MinLengthAttribute minLength)
            {
                description.AppendLine("Min Length: " + minLength.Length);
            }

            if (attr is MaxLengthAttribute maxLength)
            {
                description.AppendLine("Max Length: " + maxLength.Length);
            }

            if (attr is StringLengthAttribute stringLength)
            {
                if (stringLength.MinimumLength > 0)
                {
                    description.AppendLine("Min Length: " + stringLength.MinimumLength);
                }

                description.AppendLine("Max Length: " + stringLength.MaximumLength);
            }

            if (attr is LenghtFixAttribute lenghtFix)
            {
                description.AppendLine("Length: " + lenghtFix.Lenght);
            }

            if (attr is RangeAttribute range)
            {
                description.AppendLine($"Range from {range.Minimum} to {range.Maximum}");
            }
        }

        field.Description = description.ToString();
    }

    private static ICollection<ValidationAttribute> GetValidationAttributes(PropertyInfo property) =>
        property.GetCustomAttributes(typeof(ValidationAttribute), true)
            .OfType<ValidationAttribute>()
            .ToList();
}