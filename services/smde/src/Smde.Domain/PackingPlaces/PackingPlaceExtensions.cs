namespace Smde.PackingPlaces;

internal static class PackingPlaceExtensions
{
    public static PackingPlaceSendEto ToSendEto(this PackingPlace p) =>
        new()
        {
            Id = p.Id,
            ContractorId = p.ContractorId,
            TypeOrder = p.TypeOrder,
            LastMileId = p.LastMileId,
            ShipmentRequestId = p.ShipmentRequestId,
            ReturnRequestId = p.ReturnRequestId,
            CustomerId = p.CustomerId,
            Status = p.Status,
            Barcode = p.Barcode,
            IsLocked = p.IsLocked
        };

    public static PackingPlaceAcceptEto ToAcceptEto(this PackingPlace p) =>
        new()
        {
            Id = p.Id,
            ContractorId = p.ContractorId,
            TypeOrder = p.TypeOrder,
            LastMileId = p.LastMileId,
            ShipmentRequestId = p.ShipmentRequestId,
            ReturnRequestId = p.ReturnRequestId,
            CustomerId = p.CustomerId,
            Status = p.Status,
            Barcode = p.Barcode,
            IsLocked = p.IsLocked
        };

    public static PackingPlaceIssueEto ToIssueEto(this PackingPlace p) =>
        new()
        {
            Id = p.Id,
            ContractorId = p.ContractorId,
            TypeOrder = p.TypeOrder,
            LastMileId = p.LastMileId,
            ShipmentRequestId = p.ShipmentRequestId,
            ReturnRequestId = p.ReturnRequestId,
            CustomerId = p.CustomerId,
            Status = p.Status,
            Barcode = p.Barcode,
            IsLocked = p.IsLocked
        };

    public static PackingPlaceInProcessSendEto ToInProcessSendEto(this PackingPlace p) =>
        new()
        {
            Id = p.Id,
            ContractorId = p.ContractorId,
            TypeOrder = p.TypeOrder,
            LastMileId = p.LastMileId,
            ShipmentRequestId = p.ShipmentRequestId,
            ReturnRequestId = p.ReturnRequestId,
            CustomerId = p.CustomerId,
            Status = p.Status,
            Barcode = p.Barcode,
            IsLocked = p.IsLocked
        };

    public static PackingPlaceInProcessReturnEto ToInProcessReturnEto(this PackingPlace p) =>
        new()
        {
            Id = p.Id,
            ContractorId = p.ContractorId,
            TypeOrder = p.TypeOrder,
            LastMileId = p.LastMileId,
            ShipmentRequestId = p.ShipmentRequestId,
            ReturnRequestId = p.ReturnRequestId,
            CustomerId = p.CustomerId,
            Status = p.Status,
            Barcode = p.Barcode,
            IsLocked = p.IsLocked
        };

    public static PackingPlaceReturnEto ToReturnEto(this PackingPlace p) =>
        new()
        {
            Id = p.Id,
            ContractorId = p.ContractorId,
            TypeOrder = p.TypeOrder,
            LastMileId = p.LastMileId,
            ShipmentRequestId = p.ShipmentRequestId,
            ReturnRequestId = p.ReturnRequestId,
            CustomerId = p.CustomerId,
            Status = p.Status,
            Barcode = p.Barcode,
            IsLocked = p.IsLocked
        };

    public static PackingPlaceCancelEto ToCancelEto(this PackingPlace p) =>
        new()
        {
            Id = p.Id,
            ContractorId = p.ContractorId,
            TypeOrder = p.TypeOrder,
            LastMileId = p.LastMileId,
            ShipmentRequestId = p.ShipmentRequestId,
            ReturnRequestId = p.ReturnRequestId,
            CustomerId = p.CustomerId,
            Status = p.Status,
            Barcode = p.Barcode,
            IsLocked = p.IsLocked
        };
}