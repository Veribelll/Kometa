using Smde.Orders;
using Volo.Abp.Domain.Entities.Events.Distributed;

namespace Smde.PackingPlaces;

[Serializable]
public class PackingPlaceEto : EtoBase
{
    public Guid Id { get; init; }
    public Guid ContractorId { get; init; }
    public TypeOrder TypeOrder { get; init; } = default!;
    public PackingPlaceStatus Status { get; init; } = default!;
    public Guid? LastMileId { get; init; }
    public Guid? ShipmentRequestId { get; init; }
    public Guid? ReturnRequestId { get; init; }
    public Guid? CustomerId { get; set; }
    public string Barcode { get; init; } = default!;
    public bool IsLocked { get; init; }
}