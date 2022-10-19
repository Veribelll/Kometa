using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using static Smde.PackingPlaces.ReturnRequests.ReturnRequestConstants;

namespace Smde.PackingPlaces.ReturnRequests;

public class CreateReturnRequestInput : CreateOrUpdateReturnRequestInputBase
{
    [Required]
    [ID(nameof(PackingPlace))]
    public Guid PackingPlaceId { get; set; }

    /// <summary>
    /// Код
    /// </summary>
    [Required]
    [StringLength(MaxCodeLenght)]
    public string Code { get; set; } = default!;

    /// <summary>
    /// Причина
    /// </summary>
    [StringLength(MaxCauseLenght)]
    public string? Cause { get; set; }
}