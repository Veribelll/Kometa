using System.ComponentModel.DataAnnotations;
using HotChocolate.Resolvers;

namespace Kometa.Graphql.Types;

public class ValidationMiddleware
{
    public const string MiddlewareIdentifier = "Kometa.ValidationMiddleware";

    private readonly FieldDelegate _next;

    public ValidationMiddleware(FieldDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(IMiddlewareContext context)
    {
        foreach (var argument in context.Selection.Field.Arguments)
        {
            var input = context.ArgumentValue<object?>(argument.Name);

            if (input is not null)
            {
                var validationContext = new ValidationContext(input);
                Validator.ValidateObject(input, validationContext, true);
            }
        }

        await _next(context).ConfigureAwait(false);
    }
}