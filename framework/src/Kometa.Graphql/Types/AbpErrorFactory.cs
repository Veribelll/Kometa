using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities;

namespace Kometa.Graphql.Types;

public class AbpErrorFactory :
    IPayloadErrorFactory<EntityNotFoundException, EntityNotFoundError>,
    IPayloadErrorFactory<ValidationException, ValidationError>
{
    public EntityNotFoundError CreateErrorFrom(EntityNotFoundException exception) => new(exception);
    public ValidationError CreateErrorFrom(ValidationException exception) => new(exception);
}