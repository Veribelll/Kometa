using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;
using static Smde.LastMiles.AccessKeys.AccessKeyConstants;

namespace Smde.LastMiles.AccessKeys;

public abstract class CreateOrUpdateAccessKeyInputBase
{
    [Required]
    [ID(nameof(LastMile))]
    public Guid LastMileId { get; set; }

    [Required]
    [StringLength(MaxBarcodeLenght)]
    public string Barcode { get; set; } = default!;
    
    public DateTime? ExpiresDt { get; set; }

    public bool IsDisposable { get; set; }
}