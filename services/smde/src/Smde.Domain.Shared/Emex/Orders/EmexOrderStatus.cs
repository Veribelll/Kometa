namespace Smde.Emex.Orders;

public enum EmexOrderStatus {
    Created,
    PartiallySent,
    Sent,
    PartiallyAccepted,
    Accepted,
    PartiallyIssued,
    Issued,
    Return
}