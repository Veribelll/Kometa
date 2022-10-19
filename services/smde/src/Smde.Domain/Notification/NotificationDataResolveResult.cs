namespace Smde.Notification;

public class NotificationDataResolveResult
{
    public string? LastMileAddress { get; set; }
    public string? PackingPlaceBarcode { get; set; }
    public ICollection<string>? OrderIds { get; set; }
    public string? CustomerName { get; set; }
    public string? CustomerId { get; set; }
    public string? PinCode { get; set; }
}