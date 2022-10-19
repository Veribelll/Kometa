using Volo.Abp.Domain.Entities;

namespace Kometa.Graphql.Types;

public class EntityNotFoundError
{
    public string? Id { get; }
    public string? Type { get; }
    public string Message { get; }

    public EntityNotFoundError(EntityNotFoundException exception)
    {
        Id = exception.Id?.ToString();
        Type = exception.EntityType?.Name;
        Message = exception.Message;
    }
}