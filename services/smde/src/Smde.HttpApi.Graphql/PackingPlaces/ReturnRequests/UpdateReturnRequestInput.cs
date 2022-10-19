using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.PackingPlaces.ReturnRequests;

public class UpdateReturnRequestInput: CreateOrUpdateReturnRequestInputBase
{
    [Required]
    [ID(nameof(ReturnRequest))]
    public Guid Id { get; set; }
}