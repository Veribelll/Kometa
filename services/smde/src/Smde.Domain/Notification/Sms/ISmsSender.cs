namespace Smde.Notification.Sms;

public interface ISmsSender
{
    Task SendAsync(string phoneNumber, string text);
    Task QueueAsync(string phoneNumber, string text);
}