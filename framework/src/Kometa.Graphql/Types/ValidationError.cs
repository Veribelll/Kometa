using System.ComponentModel.DataAnnotations;

namespace Kometa.Graphql.Types;

public class ValidationError
{
    public string Message { get; }

    public ValidationError(ValidationException exception)
    {
        Message = exception.Message;
    }
}