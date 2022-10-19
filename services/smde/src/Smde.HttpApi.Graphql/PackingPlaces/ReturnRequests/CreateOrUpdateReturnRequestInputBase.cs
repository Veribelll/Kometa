using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;
using static Smde.PackingPlaces.ReturnRequests.ReturnRequestConstants;

namespace Smde.PackingPlaces.ReturnRequests;

public abstract class CreateOrUpdateReturnRequestInputBase
{
    [Required] 
    [ID(nameof(IdentityUser))]
    public Guid CourierId { get; set; }

    /// <summary>
    /// Комментарий для курьера
    /// </summary>
    [StringLength(MaxCommentLenght)]
    public string? Comment { get; set; }
}